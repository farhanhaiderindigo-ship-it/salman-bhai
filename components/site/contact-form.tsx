'use client'

import { useState } from 'react'

const EMAIL = 'hello@hoofsclaws.com'

const fieldClass =
  'w-full border-0 border-b border-charcoal/25 bg-transparent px-0 py-3 text-base text-charcoal placeholder:text-charcoal/35 transition-colors duration-500 focus:border-leather focus:ring-0 focus:outline-none'

export function ContactForm() {
  const [opened, setOpened] = useState(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const subject = String(data.get('subject') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const body = `${message}\n\n${name}\n${email}`
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setOpened(true)
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-10">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="eyebrow text-stone">Name</span>
          <input name="name" required autoComplete="name" className={fieldClass} />
        </label>
        <label className="flex flex-col gap-2">
          <span className="eyebrow text-stone">Email</span>
          <input name="email" type="email" required autoComplete="email" className={fieldClass} />
        </label>
      </div>
      <label className="flex flex-col gap-2">
        <span className="eyebrow text-stone">Subject</span>
        <input name="subject" required className={fieldClass} />
      </label>
      <label className="flex flex-col gap-2">
        <span className="eyebrow text-stone">Message</span>
        <textarea name="message" required rows={6} className={`${fieldClass} resize-none`} />
      </label>

      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <button
          type="submit"
          className="eyebrow group inline-flex items-center gap-4 self-start bg-charcoal px-8 py-5 text-ivory transition-colors duration-500 hover:bg-leather"
        >
          Send message
          <span aria-hidden="true" className="block h-px w-8 bg-brass transition-[width] duration-500 group-hover:w-12" />
        </button>
        <p className="max-w-[24rem] text-xs leading-relaxed text-charcoal/55" aria-live="polite">
          {opened
            ? 'Your email application should now open with your message. Please send it from there.'
            : 'Sending opens your own email application. Nothing is stored on this website.'}
        </p>
      </div>
    </form>
  )
}
