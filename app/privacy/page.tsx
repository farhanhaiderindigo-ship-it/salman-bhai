import type { Metadata } from 'next'
import { LegalSection, PageShell, Placeholder } from '@/components/site/page-shell'

export const metadata: Metadata = {
  title: 'Privacy | Hoofs & Claws',
  description: 'How Hoofs & Claws handles personal data.',
}

const link = 'text-leather underline-offset-4 hover:underline'

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Legal / Privacy"
      title="Privacy."
      intro={<p>How we handle personal data when you visit this website or get in touch with us.</p>}
    >
      <LegalSection number="01" title="Hosting">
        <p>
          This website is hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. When you visit the
          site, the hosting provider processes technical data such as your IP address, browser type, the pages
          requested and the time of access in server logs. This is necessary to deliver the website securely and
          reliably.
        </p>
        <p>
          Further information:{' '}
          <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className={link}>
            Vercel privacy policy
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection number="02" title="Contact enquiries">
        <p>
          The contact form on this website does not store or transmit your message through our servers. It opens your
          own email application with your message pre-filled. When you send an email to{' '}
          <a href="mailto:hello@hoofsclaws.com" className={link}>
            hello@hoofsclaws.com
          </a>
          , we process your name, email address and message solely to respond to your enquiry.
        </p>
        <p>
          Retention period: <Placeholder>How long enquiries are kept</Placeholder>
        </p>
      </LegalSection>

      <LegalSection number="03" title="Newsletter sign-up">
        <p>
          The launch sign-up form currently confirms your entry in the browser only. No data is stored or sent.
          <br />
          <Placeholder>Update this section once a newsletter service is configured</Placeholder>
        </p>
      </LegalSection>

      <LegalSection number="04" title="Cookies">
        <p>
          This website does not set cookies for advertising or tracking purposes. Your language selection is held
          only in the current browser session and is not stored.
        </p>
      </LegalSection>

      <LegalSection number="05" title="Analytics">
        <p>
          We use Vercel Web Analytics to understand how the website is used in aggregate, for example which pages are
          visited. Vercel Web Analytics does not use cookies and does not track visitors across websites. Data is
          collected anonymously.
        </p>
        <p>
          Further information:{' '}
          <a
            href="https://vercel.com/docs/analytics/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            Vercel Analytics privacy
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection number="06" title="External media">
        <p>
          Fonts are self-hosted with the website and are not loaded from third-party servers. No external videos,
          maps or social media embeds are used.
        </p>
      </LegalSection>

      <LegalSection number="07" title="Your rights">
        <p>
          You have the right to access, rectify and erase your personal data, to restrict or object to its
          processing, and to data portability. You may also lodge a complaint with a data protection supervisory
          authority.
        </p>
        <p>
          Competent supervisory authority: <Placeholder>Name of supervisory authority</Placeholder>
        </p>
      </LegalSection>

      <LegalSection number="08" title="Data controller">
        <p>
          Hoofs &amp; Claws
          <br />
          <Placeholder>Legal company name</Placeholder>
          <br />
          <Placeholder>Address</Placeholder>
          <br />
          Email:{' '}
          <a href="mailto:hello@hoofsclaws.com" className={link}>
            hello@hoofsclaws.com
          </a>
        </p>
        <p>
          Last updated: <Placeholder>Date</Placeholder>
        </p>
      </LegalSection>
    </PageShell>
  )
}
