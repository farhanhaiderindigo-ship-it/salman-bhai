'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { MaskLines, Reveal, Rule } from './reveal'
import { AiLabel } from './ai-label'

export function Workshop() {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-6%', '6%'])

  return (
    <section aria-labelledby="workshop-title" className="relative bg-warm-white text-charcoal">
      <div className="mx-auto max-w-[1680px] px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="flex items-center justify-between">
          <p className="eyebrow text-leather">H&amp;C / Workshop perspective</p>
          <p className="eyebrow text-stone">Field notes / 02</p>
        </div>
        <Rule className="mt-5" />

        <div className="mt-10 grid grid-cols-1 gap-10 md:mt-14 md:grid-cols-12 md:gap-10">
          <div ref={ref} className="md:col-span-7">
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden bg-charcoal md:aspect-[6/7]">
                <motion.div style={{ y }} className="absolute -inset-y-[8%] inset-x-0 will-change-transform">
                  <Image
                    src="/images/workshop.png"
                    alt="Artisan hands cutting brown leather on a worn workbench surrounded by traditional tools"
                    fill
                    sizes="(min-width: 768px) 58vw, 100vw"
                    className="object-cover object-[45%_50%]"
                  />
                </motion.div>
                <AiLabel />
              </div>
              <figcaption className="mt-4 flex justify-between gap-6 text-[0.7rem] tracking-[0.16em] text-stone uppercase">
                <span>Quality begins with the details.</span>
                <span>Illustrative scene</span>
              </figcaption>
            </figure>
          </div>

          <div className="flex flex-col justify-center md:col-span-5 md:col-start-8 lg:col-span-4 lg:col-start-9">
            <MaskLines
              as="h2"
              id="workshop-title"
              lines={['Knowledge first.', <em key="e" className="text-leather">Care, always.</em>]}
              className="font-serif text-[clamp(2.6rem,4.6vw,4.75rem)] leading-[0.98] font-light tracking-[-0.01em]"
            />
            <span aria-hidden="true" className="my-8 block h-px w-10 bg-brass" />
            <div className="flex flex-col gap-6">
              <Reveal>
                <p className="text-[0.98rem] leading-[1.85] text-charcoal/75">
                  We are bringing our experience together to create a brand focused on quality animal products,
                  equestrian equipment, falconry essentials, leather goods, and carefully selected items for animal
                  lovers.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-[0.98rem] leading-[1.85] text-charcoal/75">
                  Our aim is simple: to offer products chosen with genuine knowledge, attention to quality, and an
                  understanding of how they will be used in the real world.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
