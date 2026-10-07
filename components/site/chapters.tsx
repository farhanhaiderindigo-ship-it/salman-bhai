'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { AiLabel } from './ai-label'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'
import { MaskLines, Reveal, Rule } from './reveal'

const CHAPTERS = [
  {
    key: 'equestrian',
    name: 'Equestrian',
    study: 'Strength, in good company.',
    title: 'An equestrian way of life.',
    copy: [
      'An appreciation for dependable equipment and thoughtful care. Rooted in the everyday experience of life with horses.',
    ],
    image: '/images/equestrian-portrait.png',
    alt: 'A black horse in a fine leather bridle against a dark background',
    position: 'object-[50%_35%]',
  },
  {
    key: 'falconry',
    name: 'Falconry',
    study: 'Instinct, met with understanding.',
    title: 'A partnership built on trust.',
    copy: [
      'Patience. Knowledge. Respect. A close partnership with birds of prey, and an appreciation for the traditions that surround it.',
    ],
    image: '/images/falcon.png',
    alt: 'A peregrine falcon perched on a leather falconry glove',
    position: 'object-[42%_40%]',
  },
  {
    key: 'companionship',
    name: 'Companionship',
    study: null,
    title: 'A life shared.',
    copy: [
      'At the heart of it all is a genuine connection with animals. The familiar companions. The extraordinary encounters. The care that makes a difference.',
      'Carefully considered solutions for people who share their lives and experiences with animals.',
    ],
    image: '/images/connection.png',
    alt: 'A hand resting gently on the muzzle of a bay horse in a stable doorway',
    position: 'object-[45%_50%]',
  },
] as const

function ChapterText({
  index,
  chapter,
  onActive,
}: {
  index: number
  chapter: (typeof CHAPTERS)[number]
  onActive: (i: number) => void
}) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { amount: 0.5 })

  useEffect(() => {
    if (inView) onActive(index)
  }, [inView, index, onActive])

  return (
    <article
      ref={ref}
      aria-labelledby={`chapter-${chapter.key}`}
      className="flex flex-col justify-center py-16 md:min-h-[100svh] md:py-24"
    >
      <div className="relative mb-10 aspect-[4/5] overflow-hidden bg-charcoal md:hidden">
        <Image
          src={chapter.image || '/placeholder.svg'}
          alt={chapter.alt}
          fill
          sizes="100vw"
          className={cn('object-cover', chapter.position)}
        />
        <AiLabel />
      </div>

      <div className="flex items-baseline gap-4">
        <span className="eyebrow text-leather">{`Chapter 0${index + 1}`}</span>
        <span aria-hidden="true" className="h-px flex-1 bg-charcoal/15" />
      </div>

      <Reveal>
        <p className="mt-8 font-sans text-[clamp(2.4rem,5.4vw,5.25rem)] leading-none font-light tracking-[0.08em] uppercase">
          {chapter.name}
        </p>
      </Reveal>
      {chapter.study && (
        <Reveal delay={0.05}>
          <p className="mt-6 text-[0.72rem] tracking-[0.2em] text-stone uppercase">
            {`Study 0${index + 1} — `}
            <span className="font-serif text-base tracking-normal normal-case italic text-leather">
              {chapter.study}
            </span>
          </p>
        </Reveal>
      )}

      <Reveal delay={0.1}>
        <h3
          id={`chapter-${chapter.key}`}
          className="mt-10 font-serif text-[clamp(2rem,3.4vw,3.5rem)] leading-[1.02] font-light italic"
        >
          {chapter.title}
        </h3>
      </Reveal>
      <div className="mt-8 flex max-w-[30rem] flex-col gap-5">
        {chapter.copy.map((p, i) => (
          <Reveal key={i} delay={0.15 + i * 0.08}>
            <p className="text-[0.98rem] leading-[1.85] text-charcoal/70">{p}</p>
          </Reveal>
        ))}
      </div>
    </article>
  )
}

export function Chapters() {
  const [active, setActive] = useState(0)

  return (
    <section id="things" aria-labelledby="things-title" className="relative bg-ivory text-charcoal">
      <div className="mx-auto max-w-[1680px] px-6 pt-24 md:px-10 md:pt-40 lg:px-14">
        <div className="flex items-center justify-between">
          <p className="eyebrow text-leather">02 / The things that move us</p>
          <p className="eyebrow text-stone">02 / 05</p>
        </div>
        <Rule className="mt-5" />

        <div className="mt-16 grid grid-cols-1 gap-10 md:mt-24 md:grid-cols-12">
          <MaskLines
            as="h2"
            lines={['One connection.', <em key="e" className="text-leather">Many expressions.</em>]}
            className="text-display text-[clamp(3rem,8vw,8.5rem)] md:col-span-9"
          />
          <Reveal delay={0.3} className="flex items-end md:col-span-3">
            <p className="font-serif text-xl leading-snug font-light text-charcoal/75 md:text-right md:text-2xl">
              Rooted in experience. Chosen with care.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-16 md:mt-24">
          <div className="relative aspect-[16/10] overflow-hidden bg-charcoal md:aspect-[21/8]">
            <Image
              src="/images/stable.png"
              alt="A quiet historic stable aisle with oak stall doors and soft light from the far doorway"
              fill
              sizes="100vw"
              className="object-cover object-[50%_55%]"
            />
            <AiLabel />
          </div>
        </Reveal>
      </div>

      <div className="mx-auto max-w-[1680px] px-6 pb-12 md:grid md:grid-cols-12 md:gap-10 md:px-10 md:pb-0 lg:px-14">
        <div className="md:col-span-5 lg:col-span-4">
          {CHAPTERS.map((chapter, i) => (
            <ChapterText key={chapter.key} index={i} chapter={chapter} onActive={setActive} />
          ))}
        </div>

        <div className="hidden md:col-span-7 md:col-start-6 md:block lg:col-span-7 lg:col-start-6">
          <div className="sticky top-0 flex h-[100svh] items-center py-24">
            <div className="relative h-full w-full overflow-hidden bg-charcoal">
              {CHAPTERS.map((chapter, i) => (
                <motion.div
                  key={chapter.key}
                  aria-hidden={active !== i}
                  className="absolute inset-0"
                  initial={false}
                  animate={{
                    opacity: active === i ? 1 : 0,
                    scale: active === i ? 1 : 1.06,
                  }}
                  transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={chapter.image || '/placeholder.svg'}
                    alt={chapter.alt}
                    fill
                    sizes="(min-width: 768px) 58vw, 100vw"
                    className={cn('object-cover', chapter.position)}
                  />
                </motion.div>
              ))}
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal/70 to-transparent" />
              <AiLabel className="top-6 right-6 bottom-auto md:top-6 md:right-6 md:bottom-auto lg:top-8 lg:right-8" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-ivory lg:p-8">
                <p className="eyebrow">
                  <span className="text-brass">{`0${active + 1}`}</span>
                  <span className="text-ivory/50">{' / 03'}</span>
                </p>
                <ol className="flex gap-6" aria-label="Chapters">
                  {CHAPTERS.map((c, i) => (
                    <li
                      key={c.key}
                      className={cn(
                        'eyebrow transition-opacity duration-700',
                        active === i ? 'opacity-100' : 'opacity-40',
                      )}
                    >
                      {c.name}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
