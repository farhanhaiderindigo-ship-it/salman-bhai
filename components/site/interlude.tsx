'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { AiLabel } from './ai-label'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

export function Interlude() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-12%', '12%'])
  const textOpacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0])

  return (
    <section
      ref={ref}
      aria-label="A closer connection"
      className="relative h-[110svh] min-h-[640px] overflow-hidden bg-stone text-charcoal"
    >
      <motion.div style={{ y }} className="absolute -inset-y-[14%] inset-x-0 will-change-transform">
        <Image
          src="/images/horse-mist.png"
          alt="A grey horse walking alone through an early morning misty meadow"
          fill
          sizes="100vw"
          className="object-cover object-[50%_60%]"
        />
      </motion.div>
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-warm-white/70 to-transparent" />
      <AiLabel className="right-6 bottom-6 md:right-10 md:bottom-8 lg:right-14" />

      <motion.div
        style={{ opacity: reduce ? 1 : textOpacity }}
        className="relative flex h-full flex-col items-center justify-start px-6 pt-[22svh] text-center"
      >
        <p className="eyebrow text-charcoal/70">Hoofs &amp; Claws</p>
        <p className="mt-6 font-serif text-[clamp(3rem,9vw,9rem)] leading-[0.9] font-light italic tracking-[-0.02em]">
          A closer connection.
        </p>
      </motion.div>
    </section>
  )
}
