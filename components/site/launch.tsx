import Image from 'next/image'
import { AiLabel } from './ai-label'
import { MaskLines, Reveal, Rule } from './reveal'
import { NewsletterForm } from './newsletter-form'

export function Launch() {
  return (
    <section id="journey" aria-labelledby="journey-title" className="relative overflow-hidden bg-charcoal text-ivory">
      <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-[46%] lg:block">
        <Image
          src="/images/final-landscape.png"
          alt=""
          fill
          sizes="46vw"
          className="object-cover object-[40%_50%] opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-charcoal to-transparent" />
        <AiLabel className="right-14 bottom-8" />
      </div>

      <div className="relative mx-auto max-w-[1680px] px-6 py-24 md:px-10 md:py-40 lg:px-14">
        <div className="flex items-center justify-between">
          <p className="eyebrow text-brass">05 / A considered beginning</p>
          <p className="eyebrow text-ivory/45">05 / 05</p>
        </div>
        <Rule className="mt-5" />

        <div className="mt-16 max-w-3xl md:mt-24 lg:max-w-[52%]">
          <Reveal>
            <p className="eyebrow inline-flex items-center gap-4 text-ivory/70">
              <span aria-hidden="true" className="block h-1.5 w-1.5 rounded-full bg-brass" />
              Online Store — Launching Soon
            </p>
          </Reveal>

          <MaskLines
            as="h2"
            lines={['The next chapter', <em key="e">is taking shape.</em>]}
            className="text-display mt-10 text-[clamp(3rem,7.5vw,7.75rem)]"
          />

          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-6">
            <div className="md:col-span-5">
              <Reveal>
                <h3 id="journey-title" className="font-serif text-[clamp(1.75rem,2.6vw,2.5rem)] leading-none font-light">
                  Follow Our Journey
                </h3>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 text-[0.98rem] leading-[1.85] text-ivory/70">
                  Be among the first to hear about our launch, brand updates, and the opening of our online store.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-4 text-[0.98rem] leading-[1.85] text-ivory/50">
                  Our full online store, product collections, and more information about Hoofs &amp; Claws will be
                  available soon.
                </p>
              </Reveal>
              <Reveal delay={0.2} className="mt-14">
                <NewsletterForm />
              </Reveal>
            </div>
          </div>
        </div>

        <div className="relative mt-20 aspect-[4/3] overflow-hidden lg:hidden">
          <Image
            src="/images/final-landscape.png"
            alt="A horse and rider walking away along a tree-lined country lane at dusk"
            fill
            sizes="100vw"
            className="object-cover object-[50%_55%]"
          />
          <AiLabel />
        </div>
      </div>
    </section>
  )
}
