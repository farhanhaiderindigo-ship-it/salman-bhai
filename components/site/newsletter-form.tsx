'use client'

import { useId, useState } from 'react'
import { ArrowRight } from 'lucide-react'

type Status = 'idle' | 'invalid' | 'preview'

export function NewsletterForm() {
  const id = useId()
  const [status, setStatus] = useState<Status>('idle')

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = String(new FormData(e.currentTarget).get('email') ?? '').trim()
    setStatus(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? 'preview' : 'invalid')
  }

  const field =
    'peer w-full border-0 border-b border-ivory/25 bg-transparent px-0 pt-6 pb-3 text-base text-ivory placeholder-transparent transition-colors duration-500 focus:border-brass focus:ring-0 focus:outline-none'
  const label =
    'eyebrow pointer-events-none absolute top-0 left-0 text-[0.62rem] text-ivory/50 transition-colors peer-focus:text-brass'

  return (
    <form onSubmit={onSubmit} noValidate aria-describedby={`${id}-note`} className="flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div className="relative">
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Email address"
            aria-invalid={status === 'invalid'}
            className={field}
          />
          <label htmlFor={`${id}-email`} className={label}>
            Email address
          </label>
        </div>
        <div className="relative">
          <input
            id={`${id}-name`}
            name="firstName"
            type="text"
            autoComplete="given-name"
            placeholder="First name"
            className={field}
          />
          <label htmlFor={`${id}-name`} className={label}>
            {'First name '}
            <span className="normal-case tracking-normal text-ivory/35">(optional)</span>
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="group inline-flex items-center justify-between gap-6 border border-ivory/30 px-7 py-4 text-[0.72rem] font-medium tracking-[0.22em] uppercase transition-colors duration-500 hover:border-brass hover:bg-brass hover:text-charcoal"
        >
          Notify Me at Launch
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform duration-500 group-hover:translate-x-1"
            strokeWidth={1.25}
          />
        </button>
        <p id={`${id}-note`} className="max-w-xs text-xs leading-relaxed text-ivory/40">
          Preview only — sign-ups are not yet stored. Email collection will be enabled ahead of launch.
        </p>
      </div>

      <p role="status" aria-live="polite" className="min-h-6 font-serif text-lg italic text-brass">
        {status === 'invalid' && 'Please enter a valid email address.'}
        {status === 'preview' &&
          'Thank you. Sign-ups open shortly — until then, write to us at hello@hoofsclaws.com.'}
      </p>
    </form>
  )
}
