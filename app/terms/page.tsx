import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service — HisabMitra',
  description:
    'Terms and conditions for using the HisabMitra mobile accounting app by Sunray Datalinks.',
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-xl text-paper">{title}</h2>
      <div className="mt-4 space-y-4 font-body text-paperdim">{children}</div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="font-display text-3xl text-paper">Terms of Service</h1>

      <Section title="Acceptance">
        <p>
          These terms are an agreement between you and Sunray Datalinks for the use of the
          HisabMitra app. By creating an account or using the app, you agree to these terms. If you do
          not agree, please do not use the app.
        </p>
      </Section>

      <Section title="The service">
        <p>
          HisabMitra helps small businesses keep accounts — udhar, mahina khata, cash book,
          reports, and related features. We offer a free plan (Saathi) and a paid plan (Pragati).
          Features may change as we improve the app.
        </p>
      </Section>

      <Section title="Your account">
        <p>
          You are responsible for keeping your phone, PIN, and account secure. Tell us promptly if
          you believe your account has been used without your permission. You must give accurate
          information when you sign up.
        </p>
      </Section>

      <Section title="Acceptable use">
        <p>
          Use HisabMitra only for lawful business purposes. Do not misuse the app, attempt to
          break its security, or use it to harm others. We may suspend accounts that break these
          terms.
        </p>
      </Section>

      <Section title="Plans and payment">
        <p>
          Paid plans are billed annually through our payment provider. Prices are shown in the app
          and on this site. Unless required by law, payments are non-refundable once a plan period
          has started. You can choose not to renew at any time.
        </p>
        <p>We will tell you in advance of any change to plan pricing.</p>
      </Section>

      <Section title="Your data and content">
        <p>
          Your business records belong to you. You grant us only the limited permission needed to
          store, back up, and sync your data so we can provide the service. We handle your data as
          described in our{' '}
          <Link href="/privacy" className="text-brass hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </Section>

      <Section title="Disclaimers">
        <p>
          HisabMitra is a record-keeping tool, not professional accounting, tax, or legal advice.
          You are responsible for the accuracy of what you enter and for your own compliance. The
          app is provided &quot;as is&quot;, and we do not guarantee it will be uninterrupted or
          error-free.
        </p>
      </Section>

      <Section title="Limitation of liability">
        <p>
          To the extent permitted by law, we are not liable for indirect or consequential losses
          arising from your use of the app. Keep your own backups of important information.
        </p>
      </Section>

      <Section title="Termination">
        <p>
          You can stop using HisabMitra and delete your account at any time. We may suspend or
          end access if these terms are broken or if needed to protect the service and its users.
        </p>
      </Section>

      <Section title="Governing law">
        <p>
          These terms are governed by the laws of India. Any disputes will be subject to the courts
          of Gujarat, India.
        </p>
      </Section>

      <Section title="Changes to these terms">
        <p>
          We may update these terms from time to time. We will post the new version here and update
          the date above. Continued use of the app means you accept the updated terms.
        </p>
      </Section>
    </main>
  );
}
