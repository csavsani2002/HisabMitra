import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — HisabMitra',
  description:
    'How HisabMitra handles your account, business records, backups, and device information.',
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-xl text-paper">{title}</h2>
      <div className="mt-4 space-y-4 font-body text-paperdim">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="font-display text-3xl text-paper">Privacy Policy</h1>

      <Section title="Introduction">
        <p>
          HisabMitra is a mobile accounting app made by Sunray Datalinks (&quot;we&quot;,
          &quot;us&quot;, or &quot;our&quot;). This Privacy Policy explains what information the app
          handles, why we handle it, and the choices you have. We have tried to keep it simple
          and easy to understand.
        </p>
        <p>
          HisabMitra is an offline-first application. Your business books are created and
          stored on your own device. We only collect and process the limited information required
          to create your account, provide backup and synchronization, enable paid features, and
          improve the reliability of our services.
        </p>
      </Section>

      <Section title="Account Information">
        <p>
          We collect your mobile number to verify your identity using a One-Time Password (OTP)
          and to identify your account.
        </p>
      </Section>

      <Section title="Business Information">
        <p>
          We collect your business name and business category to personalize your experience,
          organize your account, and understand overall app usage trends. This information may
          be used for internal analytics and service improvements.
        </p>
      </Section>

      <Section title="Business Records">
        <p>
          Your business records—including customers, udhar/baaki, entries, bills, invoices,
          transactions, reports, and other accounting data you create—are stored on your device.
          If you enable backup or sync, we securely store an encrypted copy of your data on our
          backup servers, allowing you to restore your records whenever needed, such as when
          changing, resetting, or losing your device.
        </p>
        <p>
          We do not analyze, read, sell, or share the contents of your business records for
          advertising, marketing, or any purpose unrelated to providing the services you request.
        </p>
        <p>
          For business analytics and service improvement, we may use limited account information
          such as your mobile number, business name, and business category. This helps us
          understand the types of businesses using HisabMitra, improve our services, and
          communicate relevant updates or offers to appropriate groups of users. We do not use or
          analyze your customers, entries, bills, transactions, reports, or any other business
          records for these purposes, and we do not share them with third parties for marketing
          or advertising.
        </p>
      </Section>

      <Section title="Payment Information">
        <p>
          If you purchase a paid plan, the payment is processed securely by our payment provider.
          We receive only the payment confirmation and subscription status. We do not receive
          or store your complete card, bank account, or UPI payment details.
        </p>
      </Section>

      <Section title="Device Information">
        <p>
          We collect limited device and application information, such as device model, operating
          system version, app version, crash reports, and diagnostic information, to maintain app
          performance, improve reliability, and resolve technical issues.
        </p>
      </Section>

      <Section title="How We Use Information">
        <p>
          We use your information to verify your identity using OTP, keep your account secure, and
          synchronize your data across your devices when backup is enabled.
        </p>
        <p>
          We also use it to provide features such as cloud backup, PDF export, and WhatsApp bill
          sharing; to process subscriptions and manage paid plans; to improve app performance,
          reliability, and customer support; and to analyze anonymous usage patterns using your
          business category and business name for product improvement.
        </p>
        <p>
          We do not analyze the contents of your customers, transactions, bills, reports, or other
          business records. We do not sell your personal or business data.
        </p>
      </Section>

      <Section title="Storage and Backup">
        <p>
          Your primary business data remains on your device and the app works fully offline.
        </p>
        <p>
          When backup or sync is enabled, an encrypted copy of your business records is securely
          stored on our backup servers (hosted in India). This allows you to restore your data if
          you lose, replace, or reset your device.
        </p>
        <p>
          We use reasonable technical and organizational security measures to protect your
          information. Although no system can guarantee complete security, we continuously work to
          safeguard your data.
        </p>
      </Section>

      <Section title="Sharing of Information">
        <p>
          We share information only with trusted service providers that help operate the app,
          including SMS providers for OTP verification, payment providers for subscription
          processing, and cloud infrastructure providers for encrypted backups. These providers
          may only use the information necessary to provide their respective services.
        </p>
        <p>We may disclose information if required by applicable law or legal process.</p>
        <p>
          We never sell your personal information or business records to third parties.
        </p>
      </Section>

      <Section title="Your Choices and Rights">
        <p>
          You can view, edit, and export your business records at any time; enable or disable
          backup and synchronization from the app settings; and request deletion of your account
          and the encrypted backups stored on our servers.
        </p>
        <p>
          Financial records created within the app may be soft-deleted to help preserve accounting
          history, while you remain in full control of the data stored on your device.
        </p>
      </Section>

      <Section title="Data Retention">
        <p>Encrypted backup data is retained while your account remains active.</p>
        <p>
          If you delete your account, we will delete your encrypted backup within a reasonable
          period, except where we are legally required to retain limited records for accounting,
          taxation, fraud prevention, or compliance purposes.
        </p>
      </Section>

      <Section title="Children's Privacy">
        <p>
          HisabMitra is intended for business owners and is not directed toward children under
          the age of 13. We do not knowingly collect personal information from children.
        </p>
      </Section>

      <Section title="Changes to This Privacy Policy">
        <p>
          We may update this Privacy Policy as HisabMitra evolves. Any updates will be published
          here with a revised effective date. If significant changes are made, we will notify
          users through the application whenever appropriate.
        </p>
      </Section>

      <p className="mt-10 font-body text-paperdim">
        Questions about this policy? Email us at{' '}
        <a href="mailto:chintan.savsani2002@gmail.com" className="text-brass hover:underline">
          chintan.savsani2002@gmail.com
        </a>
        .
      </p>
    </main>
  );
}
