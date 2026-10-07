import type { Metadata } from 'next'
import { PageShell } from '@/components/site/page-shell'
import { ContactForm } from '@/components/site/contact-form'

export const metadata: Metadata = {
  title: 'Contact | Hoofs & Claws',
  description: 'Get in touch with Hoofs & Claws.',
}

export default function ContactPage() {
  return (
    <PageShell eyebrow="Contact" title={<>Get in <em className="text-brass">touch.</em></>}>
      <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-10">
        <div className="flex flex-col gap-6 md:col-span-4">
          <p className="eyebrow text-leather">Write to us</p>
          <a
            href="mailto:hello@hoofsclaws.com"
            className="font-serif text-[clamp(1.6rem,2.6vw,2.4rem)] leading-[1.1] font-light break-all text-charcoal transition-colors duration-500 hover:text-leather"
          >
            hello@hoofsclaws.com
          </a>
          <span aria-hidden="true" className="block h-px w-10 bg-brass" />
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <ContactForm />
        </div>
      </div>
    </PageShell>
  )
}
