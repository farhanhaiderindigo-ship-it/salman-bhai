'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { MaskLines, Reveal, Rule } from './reveal'
import { AiLabel } from './ai-label'

export function FieldNotes() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['12%', '-12%'])

  return (
    <section
      ref={ref}
      id="field-notes"
      aria-labelledby="field-notes-title"
      className="relative overflow-hidden bg-ivory text-charcoal"
    >
      <div className="mx-auto max-w-[1680px] px-6 pt-20 pb-20 md:px-10 md:pt-28 md:pb-32 lg:px-14">
        <div className="flex items-center justify-between">
          <p className="eyebrow text-leather">Field notes / 01</p>
          <p className="eyebrow text-stone">01 / 05</p>
        </div>
        <Rule className="mt-5" />

        <div className="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-8 lg:col-span-8">
            <MaskLines
              as="h2"
              id="field-notes-title"
              lines={['For the', <em key="i" className="text-leather">extraordinary</em>, 'animals in our lives.']}
              className="text-display text-[clamp(3.25rem,8.6vw,9.25rem)]"
            />

            <div className="mt-10 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-8">
              <Reveal className="md:col-span-1">
                <span aria-hidden="true" className="mt-3 block h-px w-10 bg-brass" />
              </Reveal>
              <Reveal delay={0.15} className="md:col-span-5">
                <p className="font-serif text-[clamp(1.5rem,2.4vw,2.25rem)] font-light leading-[1.2] text-charcoal/85">
                  And the things that bring us closer.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="md:col-span-4 md:-mt-12 lg:col-span-3 lg:col-start-10">
            <motion.figure style={{ y: imageY }} className="ml-auto w-3/4 md:w-full">
              <div className="relative aspect-[3/4] overflow-hidden bg-charcoal">
                <Image
                  src="/images/horse-eye.png"
                  alt="Close detail of a dark horse's eye and forelock"
                  fill
                  sizes="(min-width: 1024px) 24vw, (min-width: 768px) 33vw, 75vw"
                  className="object-cover object-[50%_40%]"
                />
                <AiLabel />
              </div>
              <figcaption className="mt-4 flex justify-between text-[0.7rem] tracking-[0.16em] text-stone uppercase">
                <span>Fig. 01</span>
                <span>Instinct</span>
              </figcaption>
            </motion.figure>
          </div>
        </div>
      </div>
    </section>
  )
}
