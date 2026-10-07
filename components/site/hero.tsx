'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { AiLabel } from './ai-label'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '18%'])
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '-30%'])
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={ref}
      id="top"
      aria-label="Hoofs & Claws"
      className="relative h-[100svh] min-h-[600px] overflow-hidden bg-charcoal text-ivory"
    >
      <motion.div style={{ y: imageY }} className="absolute inset-0 will-change-transform">
        <div className="absolute inset-0 animate-[hero-settle_16s_cubic-bezier(0.22,1,0.36,1)_forwards]">
          <Image
            src="/images/hero-horse.png"
            alt="A dark bay horse standing in the window light of an old stone stable"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[68%_50%] md:object-[60%_50%]"
          />
        </div>
      </motion.div>

      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/25 to-transparent" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-charcoal/70 to-transparent" />
      <AiLabel className="top-24 right-6 bottom-auto md:top-32 md:right-10 md:bottom-auto lg:right-14" />

      <motion.div
        style={{ opacity: fade }}
        className="relative mx-auto flex h-full max-w-[1680px] flex-col justify-between px-6 pt-28 pb-8 md:px-10 md:pt-40 md:pb-10 lg:px-14"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.6, ease }}
          className="flex items-start justify-between gap-6"
        >
          <p className="eyebrow max-w-[14rem] leading-relaxed text-ivory/80 md:max-w-none">
            Equestrian spirit. <span className="text-brass">Falconry tradition.</span>
          </p>
          <p className="eyebrow hidden text-ivory/50 md:block">H&amp;C / 2026</p>
        </motion.div>

        <div>
          <motion.h1 style={{ y: titleY }} className="text-display text-[clamp(4.75rem,17vw,17.5rem)]">
            <span className="block overflow-hidden pb-[0.04em]">
              <motion.span
                className="block"
                initial={{ y: '102%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1.6, ease, delay: 0.15 }}
              >
                HOOFS
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.08em] pl-[0.55em] md:pl-[1.1em]">
              <motion.span
                className="block"
                initial={{ y: '102%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1.6, ease, delay: 0.3 }}
              >
                <span className="italic text-brass">&amp;</span> CLAWS
              </motion.span>
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 1, ease }}
            className="mt-8 grid grid-cols-1 items-end gap-6 border-t border-ivory/15 pt-6 md:mt-10 md:grid-cols-12 md:gap-10"
          >
            <p className="font-serif text-[clamp(1.6rem,3vw,2.6rem)] font-light italic leading-none md:col-span-5">
              A closer connection.
            </p>
            <div className="hidden justify-center md:col-span-2 md:flex">
              <a href="#field-notes" className="group flex flex-col items-center gap-3" aria-label="Scroll to continue">
                <span className="eyebrow text-[0.6rem] text-ivory/50">Scroll</span>
                <span aria-hidden="true" className="relative block h-12 w-px overflow-hidden bg-ivory/15">
                  <span className="absolute inset-0 animate-[scroll-line_2.8s_cubic-bezier(0.65,0,0.35,1)_infinite] bg-ivory" />
                </span>
              </a>
            </div>
            <div className="flex flex-col gap-2 md:col-span-5 md:items-end md:text-right">
              <p className="eyebrow text-brass">Galloping Soon</p>
              <p className="max-w-sm text-sm leading-relaxed text-ivory/70">
                Equestrian equipment, falconry essentials and leather goods. Chosen through experience. Coming soon.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
