'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'
import { MaskLines, Reveal, Rule } from './reveal'
import { AiLabel } from './ai-label'

const DETAILS = [
  {
    key: 'leather',
    label: 'Leather',
    line: 'The curve of leather.',
    image: '/images/leather-macro.png',
    alt: 'Macro detail of rich brown saddle leather grain and a burnished fold',
  },
  {
    key: 'stitch',
    label: 'Stitch',
    line: 'The rhythm of a stitch.',
    image: '/images/stitching.png',
    alt: "A saddler's hands saddle-stitching brown leather held in a wooden clam",
  },
  {
    key: 'form',
    label: 'Form',
    line: 'A sense of purpose in every considered detail.',
    image: '/images/saddle-form.png',
    alt: 'The sweeping curve of a leather saddle cantle with precise stitching and a brass ring',
  },
] as const

const ZOOM = 1.9

function DetailViewer({ active }: { active: number }) {
  const frameRef = useRef<HTMLDivElement>(null)
  const layerRef = useRef<HTMLDivElement>(null)
  const [zoomed, setZoomed] = useState(false)
  const reduce = useReducedMotion()

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || reduce || !frameRef.current || !layerRef.current) return
    const rect = frameRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    layerRef.current.style.transformOrigin = `${x}% ${y}%`
  }

  return (
    <figure>
      <div
        ref={frameRef}
        onPointerEnter={(e) => e.pointerType === 'mouse' && !reduce && setZoomed(true)}
        onPointerLeave={() => setZoomed(false)}
        onPointerMove={onMove}
        className={cn('relative aspect-[4/5] overflow-hidden bg-charcoal md:aspect-[5/6]', !reduce && 'md:cursor-zoom-in')}
      >
        <div
          ref={layerRef}
          className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `scale(${zoomed ? ZOOM : 1})` }}
        >
          {DETAILS.map((d, i) => (
            <motion.div
              key={d.key}
              className="absolute inset-0"
              initial={false}
              animate={{ opacity: active === i ? 1 : 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              aria-hidden={active !== i}
            >
              <Image src={d.image || '/placeholder.svg'} alt={d.alt} fill sizes="(min-width: 768px) 55vw, 100vw" className="object-cover" />
            </motion.div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-5 text-ivory md:p-6">
          <p className="eyebrow text-[0.62rem] text-ivory/80">A study in saddlery</p>
          <p className="eyebrow text-[0.62rem] tabular-nums text-ivory/80" aria-live="polite">
            {zoomed ? `${Math.round(ZOOM * 100)}%` : '100%'}
          </p>
        </div>
        <span aria-hidden="true" className="pointer-events-none absolute inset-4 border border-ivory/15 md:inset-6" />
        <AiLabel className="right-7 bottom-7 md:right-9 md:bottom-9" />
      </div>
      <figcaption className="mt-4 flex justify-between gap-6 text-[0.7rem] tracking-[0.16em] text-ivory/45 uppercase">
        <span>Illustrative saddlery study</span>
        <span className="hidden md:inline">Hover to look closer</span>
      </figcaption>
    </figure>
  )
}

export function Craftsmanship() {
  const [active, setActive] = useState(0)
  const openingRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: openingRef, offset: ['start end', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1.2, 1])
  const textY = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['30%', '-20%'])

  return (
    <section id="craftsmanship" aria-labelledby="craft-title" className="relative bg-umber text-ivory">
      <div ref={openingRef} className="relative h-[100svh] min-h-[600px] overflow-hidden">
        <motion.div style={{ scale }} className="absolute inset-0 will-change-transform">
          <Image
            src="/images/saddle.png"
            alt="A brown leather English saddle resting on a wooden rack in a dark tack room"
            fill
            sizes="100vw"
            className="object-cover object-[55%_50%]"
          />
        </motion.div>
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-umber via-umber/30 to-umber/40" />
        <AiLabel className="top-24 right-6 bottom-auto md:top-28 md:right-10 md:bottom-auto lg:right-14" />

        <motion.div
          style={{ y: textY }}
          className="relative mx-auto flex h-full max-w-[1680px] flex-col justify-end px-6 pb-16 md:px-10 md:pb-24 lg:px-14"
        >
          <p className="eyebrow text-brass">04 / Craftsmanship</p>
          <MaskLines
            as="h2"
            id="craft-title"
            lines={['Closer to', <em key="e">the details.</em>]}
            className="text-display mt-6 text-[clamp(3.5rem,11vw,12rem)]"
          />
        </motion.div>
      </div>

      <div className="mx-auto max-w-[1680px] px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="flex items-center justify-between">
          <p className="eyebrow text-ivory/50">A study in saddlery</p>
          <p className="eyebrow text-ivory/50">04 / 05</p>
        </div>
        <Rule className="mt-5" />

        <div className="mt-10 grid grid-cols-1 gap-10 md:mt-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <DetailViewer active={active} />
          </div>

          <div className="flex flex-col justify-center gap-10 md:col-span-5 md:gap-12 md:col-start-8 lg:col-span-4 lg:col-start-9">
            <Reveal>
              <p className="font-serif text-[clamp(1.75rem,2.8vw,2.75rem)] leading-[1.12] font-light italic text-ivory/90">
                Natural texture, quiet character.
              </p>
            </Reveal>

            <div role="tablist" aria-label="Detail study" className="flex flex-col">
              {DETAILS.map((d, i) => (
                <button
                  key={d.key}
                  type="button"
                  role="tab"
                  aria-selected={active === i}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group relative border-t border-ivory/12 py-7 text-left last:border-b"
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute top-[-1px] left-0 h-px bg-brass transition-[width] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]',
                      active === i ? 'w-full' : 'w-0',
                    )}
                  />
                  <span className="flex items-baseline gap-6">
                    <span
                      className={cn(
                        'eyebrow tabular-nums transition-colors duration-500',
                        active === i ? 'text-brass' : 'text-ivory/40',
                      )}
                    >
                      {`0${i + 1}`}
                    </span>
                    <span className="flex flex-col gap-3">
                      <span
                        className={cn(
                          'font-sans text-[clamp(1.6rem,2.6vw,2.4rem)] leading-none font-light tracking-[0.14em] uppercase transition-opacity duration-500',
                          active === i ? 'opacity-100' : 'opacity-45 group-hover:opacity-75',
                        )}
                      >
                        {d.label}
                      </span>
                      <span
                        className={cn(
                          'font-serif text-lg italic text-ivory/70 transition-opacity duration-700',
                          active === i ? 'opacity-100' : 'opacity-0 md:opacity-0',
                        )}
                      >
                        {d.line}
                      </span>
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
