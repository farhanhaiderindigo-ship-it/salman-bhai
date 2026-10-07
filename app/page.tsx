import { Header } from '@/components/site/header'
import { Hero } from '@/components/site/hero'
import { FieldNotes } from '@/components/site/field-notes'
import { Origin } from '@/components/site/origin'
import { Chapters } from '@/components/site/chapters'
import { Craftsmanship } from '@/components/site/craftsmanship'
import { Workshop } from '@/components/site/workshop'
import { Interlude } from '@/components/site/interlude'
import { Launch } from '@/components/site/launch'
import { Footer } from '@/components/site/footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FieldNotes />
        <Origin />
        <Chapters />
        <Craftsmanship />
        <Workshop />
        <Interlude />
        <Launch />
      </main>
      <Footer />
      <div aria-hidden="true" className="grain pointer-events-none fixed inset-0 z-[70] opacity-[0.06] mix-blend-overlay" />
    </>
  )
}
