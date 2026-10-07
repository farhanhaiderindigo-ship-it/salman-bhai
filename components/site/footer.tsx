import { LanguageSwitch } from './language'

const FOOTER_LINKS = [
  { href: '/#story', label: 'Our Story' },
  { href: '/#craftsmanship', label: 'Craftsmanship' },
  { href: '/contact', label: 'Contact' },
  { href: '/impressum', label: 'Impressum' },
  { href: '/privacy', label: 'Privacy' },
]

export function Footer() {
  return (
    <footer className="relative bg-charcoal text-ivory">
      <div className="mx-auto max-w-[1680px] px-6 pt-10 pb-10 md:px-10 lg:px-14">
        <div className="border-t border-ivory/10 pt-16 md:pt-24">
          <p
            aria-label="Hoofs & Claws"
            className="text-display flex flex-col text-[clamp(5rem,22vw,22rem)] leading-[0.82] text-ivory/95"
          >
            <span aria-hidden="true">HOOFS</span>
            <span aria-hidden="true" className="pl-[0.4em] italic text-brass">
              &amp;
            </span>
            <span aria-hidden="true" className="text-right">
              CLAWS
            </span>
          </p>
        </div>

        <nav aria-label="Footer" className="mt-16 border-t border-ivory/10 pt-8 md:mt-24">
          <ul className="flex flex-wrap gap-x-8 gap-y-4">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="eyebrow text-ivory/70 transition-colors duration-500 hover:text-brass"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 grid grid-cols-1 gap-8 border-t border-ivory/10 pt-8 text-sm md:grid-cols-12 md:items-center">
          <a
            href="mailto:hello@hoofsclaws.com"
            className="font-serif text-2xl font-light transition-colors duration-500 hover:text-brass md:col-span-4"
          >
            hello@hoofsclaws.com
          </a>
          <div className="md:col-span-2">
            <LanguageSwitch />
          </div>
          <p className="text-xs text-ivory/45 md:col-span-3">
            {`© ${new Date().getFullYear()} Hoofs & Claws. All rights reserved.`}
          </p>
          <div className="flex items-center justify-between gap-6 text-xs text-ivory/45 md:col-span-3 md:justify-end">
            <span aria-hidden="true" />
            <a href="#" className="eyebrow text-ivory/80 transition-colors hover:text-brass">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
