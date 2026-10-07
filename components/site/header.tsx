'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { LanguageSwitch } from './language'

const NAV = [
  { href: '/#story', label: 'Our Story' },
  { href: '/#things', label: 'The Things That Move Us' },
  { href: '/#craftsmanship', label: 'Craftsmanship' },
]

const MENU = [...NAV, { href: '/contact', label: 'Contact' }]

const LEGAL = [
  { href: '/impressum', label: 'Impressum' },
  { href: '/privacy', label: 'Privacy' },
]

const ease = [0.22, 1, 0.36, 1] as const

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 text-ivory transition-[background-color,border-color,padding] duration-700',
          scrolled && !open
            ? 'border-b border-ivory/10 bg-charcoal/92 py-4'
            : 'border-b border-transparent bg-transparent py-6 md:py-8',
        )}
      >
        <div className="mx-auto flex max-w-[1680px] items-center justify-between px-6 md:px-10 lg:px-14">
          <a href="/#top" className="group flex items-baseline gap-2" aria-label="Hoofs & Claws, back to top">
            <span className="font-serif text-xl tracking-[0.18em] md:text-[1.35rem]">HOOFS</span>
            <span className="font-serif text-lg italic text-brass">&amp;</span>
            <span className="font-serif text-xl tracking-[0.18em] md:text-[1.35rem]">CLAWS</span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-10 lg:flex">
            <ul className="flex items-center gap-9">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="eyebrow relative opacity-80 transition-opacity duration-500 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-brass after:transition-transform after:duration-500 hover:opacity-100 hover:after:scale-x-100"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <span aria-hidden="true" className="h-4 w-px bg-ivory/25" />
            <LanguageSwitch />
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="eyebrow relative z-[60] flex items-center gap-3 lg:hidden"
          >
            <span>{open ? 'Close' : 'Menu'}</span>
            <span aria-hidden="true" className="relative block h-2.5 w-6">
              <span
                className={cn(
                  'absolute left-0 h-px w-full bg-current transition-transform duration-500',
                  open ? 'top-1/2 rotate-45' : 'top-0',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 h-px w-full bg-current transition-transform duration-500',
                  open ? 'top-1/2 -rotate-45' : 'bottom-0',
                )}
              />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-40 flex flex-col bg-charcoal text-ivory lg:hidden"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.8, ease }}
          >
            <div className="flex flex-1 flex-col justify-between gap-12 overflow-y-auto px-6 pt-28 pb-10 md:px-10">
              <div>
                <p className="eyebrow mb-10 text-stone">Index</p>
                <nav aria-label="Mobile">
                  <ol className="flex flex-col gap-6">
                    {MENU.map((item, i) => (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease, delay: 0.25 + i * 0.08 }}
                        className="border-b border-ivory/10 pb-6"
                      >
                        <a
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="flex items-baseline gap-5"
                        >
                          <span className="eyebrow text-brass">{`0${i + 1}`}</span>
                          <span className="font-serif text-[clamp(2.25rem,9vw,3.5rem)] font-light leading-[1.02]">
                            {item.label}
                          </span>
                        </a>
                      </motion.li>
                    ))}
                  </ol>
                </nav>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease, delay: 0.6 }}
                className="flex flex-col gap-8"
              >
                <LanguageSwitch />
                <div className="flex flex-wrap items-end justify-between gap-6 border-t border-ivory/10 pt-6">
                  <ul className="flex gap-6">
                    {LEGAL.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="eyebrow text-ivory/60 transition-colors duration-500 hover:text-brass"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <a href="mailto:hello@hoofsclaws.com" className="text-sm text-stone">
                    hello@hoofsclaws.com
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
