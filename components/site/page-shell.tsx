import { Header } from './header'
import { Footer } from './footer'

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string
  title: React.ReactNode
  intro?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main>
        <section className="bg-charcoal text-ivory">
          <div className="mx-auto max-w-[1680px] px-6 pt-36 pb-16 md:px-10 md:pt-48 md:pb-24 lg:px-14">
            <p className="eyebrow text-brass">{eyebrow}</p>
            <span aria-hidden="true" className="mt-5 block h-px w-full bg-ivory/15" />
            <h1 className="text-display mt-10 text-[clamp(3.25rem,9vw,8.5rem)] md:mt-14">{title}</h1>
            {intro && (
              <div className="mt-8 max-w-[36rem] text-[0.98rem] leading-[1.85] text-ivory/70 md:mt-10">{intro}</div>
            )}
          </div>
        </section>
        <section className="bg-ivory text-charcoal">
          <div className="mx-auto max-w-[1680px] px-6 py-16 md:px-10 md:py-24 lg:px-14">{children}</div>
        </section>
      </main>
      <Footer />
      <div aria-hidden="true" className="grain pointer-events-none fixed inset-0 z-[70] opacity-[0.06] mix-blend-overlay" />
    </>
  )
}

export function LegalSection({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <section className="grid grid-cols-1 gap-4 border-t border-charcoal/15 py-10 md:grid-cols-12 md:gap-10 md:py-14">
      <div className="flex items-baseline gap-5 md:col-span-4">
        <span className="eyebrow text-leather">{number}</span>
        <h2 className="font-serif text-[clamp(1.6rem,2.4vw,2.25rem)] leading-[1.1] font-light">{title}</h2>
      </div>
      <div className="flex max-w-[42rem] flex-col gap-4 text-[0.98rem] leading-[1.85] text-charcoal/75 md:col-span-8 md:col-start-5">
        {children}
      </div>
    </section>
  )
}

export function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-sm border border-dashed border-leather/50 bg-leather/5 px-1.5 py-0.5 font-mono text-[0.82em] text-leather">
      {'['}
      {children}
      {']'}
    </span>
  )
}
