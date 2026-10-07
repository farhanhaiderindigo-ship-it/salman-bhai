'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { animate, motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { MaskLines, Reveal, Rule } from './reveal'
import { AiLabel } from './ai-label'

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduce = useReducedMotion()
  const [value, setValue] = useState(reduce ? to : 0)

  useEffect(() => {
    if (!inView || reduce) return
    const controls = animate(0, to, {
      duration: 2.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, reduce, to])

  return (
    <span ref={ref} className="tabular-nums">
      {value}
    </span>
  )
}

export function Origin() {
  const bandRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: bandRef, offset: ['start end', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1.18, 1])

  return (
    <section id="story" aria-labelledby="story-title" className="relative bg-forest text-ivory">
      <div className="mx-auto max-w-[1680px] px-6 pt-20 md:px-10 md:pt-28 lg:px-14">
        <div className="grid grid-cols-2 gap-y-3 md:grid-cols-12">
          <p className="eyebrow col-span-2 text-brass md:col-span-4">01 / A genuine connection</p>
          <p className="eyebrow text-ivory/50 md:col-span-4">H&amp;C</p>
          <p className="eyebrow text-right text-ivory/50 md:col-span-4">It starts with experience.</p>
        </div>
        <Rule className="mt-5" />

        <MaskLines
          as="h2"
          id="story-title"
          lines={['Some connections', <em key="e">change everything.</em>]}
          className="text-display mt-10 max-w-[14ch] text-[clamp(2.75rem,7vw,7.5rem)] md:mt-14"
        />

        <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6 lg:col-span-5">
            <p
              aria-label="25+ years of experience with horses and equestrian care"
              className="font-serif text-[clamp(9rem,27vw,25rem)] leading-[0.78] font-light tracking-[-0.05em]"
            >
              <span aria-hidden="true">
                <CountUp to={25} />
                <span className="align-top text-[0.42em] text-brass">+</span>
              </span>
            </p>
            <div className="mt-10 flex items-start gap-5">
              <span aria-hidden="true" className="mt-2 block h-px w-10 bg-brass" />
              <p className="eyebrow leading-relaxed text-ivory/75">
                Years of experience
                <br />
                With horses &amp; equestrian care
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8 md:col-span-6 md:pt-6 lg:col-span-5 lg:col-start-8">
            <Reveal>
              <p className="font-serif text-[clamp(1.6rem,2.5vw,2.4rem)] leading-[1.18] font-light">
                At Hoofs &amp; Claws, our passion comes from years of personal experience and a genuine connection
                with animals.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-[34rem] text-[0.98rem] leading-[1.85] text-ivory/70">
                With more than 25 years of experience with horses and equestrian care, we understand the importance
                of quality, functionality, reliability, and products made to serve a real purpose.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="max-w-[34rem] text-[0.98rem] leading-[1.85] text-ivory/70">
                Our interests and experience also extend into falconry and traditional leather craftsmanship, giving
                us a strong appreciation for specialist equipment, quality materials, and the needs of people who
                work closely with animals.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <div ref={bandRef} className="mt-24 md:mt-40">
        <div className="relative h-[70svh] overflow-hidden md:h-[88svh]">
          <motion.div style={{ scale }} className="absolute inset-0 will-change-transform">
            <Image
              src="/images/rider-countryside.png"
              alt="A rider in classic attire leading a chestnut horse along a country estate path"
              fill
              sizes="100vw"
              className="object-cover object-[52%_60%]"
            />
          </motion.div>
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-forest to-transparent" />
          <AiLabel className="md:right-10 lg:right-14" />
        </div>
        <div className="mx-auto flex max-w-[1680px] items-center justify-between px-6 py-6 md:px-10 lg:px-14">
          <p className="eyebrow text-ivory/50">Plate I</p>
          <p className="eyebrow text-ivory/50">An equestrian way of life</p>
        </div>
      </div>
    </section>
  )
}
