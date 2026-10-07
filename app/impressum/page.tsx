import type { Metadata } from 'next'
import { LegalSection, PageShell, Placeholder } from '@/components/site/page-shell'

export const metadata: Metadata = {
  title: 'Impressum | Hoofs & Claws',
  description: 'Legal notice for Hoofs & Claws.',
}

export default function ImpressumPage() {
  return (
    <PageShell
      eyebrow="Legal / Impressum"
      title="Impressum."
      intro={<p>Information in accordance with applicable legal disclosure requirements.</p>}
    >
      <LegalSection number="01" title="Provider">
        <p>
          Hoofs &amp; Claws
          <br />
          <Placeholder>Legal company name and legal form</Placeholder>
          <br />
          <Placeholder>Street and number</Placeholder>
          <br />
          <Placeholder>Postcode, city, country</Placeholder>
        </p>
      </LegalSection>

      <LegalSection number="02" title="Represented by">
        <p>
          <Placeholder>Managing director / authorised representative</Placeholder>
        </p>
      </LegalSection>

      <LegalSection number="03" title="Contact">
        <p>
          Email:{' '}
          <a href="mailto:hello@hoofsclaws.com" className="text-leather underline-offset-4 hover:underline">
            hello@hoofsclaws.com
          </a>
          <br />
          Phone: <Placeholder>Phone number</Placeholder>
        </p>
      </LegalSection>

      <LegalSection number="04" title="Register & VAT">
        <p>
          Commercial register: <Placeholder>Register court and registration number</Placeholder>
          <br />
          VAT ID: <Placeholder>VAT identification number</Placeholder>
        </p>
      </LegalSection>

      <LegalSection number="05" title="Responsible for content">
        <p>
          <Placeholder>Name and address of the person responsible for editorial content</Placeholder>
        </p>
      </LegalSection>

      <LegalSection number="06" title="Images">
        <p>Images on this website are AI generated and are marked accordingly.</p>
      </LegalSection>
    </PageShell>
  )
}
