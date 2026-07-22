import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How Account Deletion Works — HisabMitra',
  description:
    'How to permanently delete your HisabMitra account and associated khata data from the app.',
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-xl text-paper">{title}</h2>
      <div className="mt-4 space-y-4 font-body text-paperdim">{children}</div>
    </section>
  );
}

export default function DeleteAccountPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="font-display text-3xl text-paper">How account deletion works</h1>
      <p className="mt-3 font-body text-sm text-paperdim">Last updated: 30 June 2026</p>

      <div className="mt-8 rounded-lg border border-paper/10 bg-paper/5 px-5 py-4">
        <p className="font-mono text-xs uppercase tracking-widest text-brass">Quick steps</p>
        <p className="mt-2 font-body text-paper">
          Open HisabMitra → Account profile → Delete account
        </p>
      </div>

      <Section title="Delete your account from the app">
        <p>
          You can permanently delete your HisabMitra account and all associated khata data
          directly from the app, without calling us or filling out any form.
        </p>
      </Section>

      <Section title="What gets deleted">
        <p>
          Deleting your account permanently removes your account, your encrypted backup on our
          servers, and access to any khata data associated with that account. This action cannot be
          undone.
        </p>
        <p>
          Financial records may be soft-deleted for a limited period to preserve accounting history
          where legally required (for example, accounting, taxation, or fraud-prevention purposes),
          even after your account is deleted. See our{' '}
          <Link href="/privacy" className="text-brass hover:underline">
            Privacy Policy
          </Link>{' '}
          for details.
        </p>
      </Section>

      <Section title="Can't access the app?">
        <p>
          If you no longer have access to the app but want your account and data deleted, email us
          at{' '}
          <a href="mailto:chintan.savsani2002@gmail.com" className="text-brass hover:underline">
            chintan.savsani2002@gmail.com
          </a>{' '}
          from the email or with the mobile number linked to your account, and we will process the
          deletion request.
        </p>
      </Section>
    </main>
  );
}
