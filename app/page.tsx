import Link from 'next/link';

const features = [
  {
    title: 'Billing & transactions',
    body:
      'Multi-line sales and purchase vouchers with dates and notes. Mark each bill Paid, Partial, or Unpaid — dues are tracked automatically.',
  },
  {
    title: 'Unified party ledger',
    body:
      'One directory for customers and suppliers. If the same person buys and sells, HisabMitra merges them into a single debit/credit statement.',
  },
  {
    title: 'Business intelligence',
    body:
      'A dashboard with sales, purchases, profit, and pending dues. Monthly trend charts and daily, monthly, and profit reports.',
  },
  {
    title: 'Inventory & partners',
    body:
      'Track products and stock, run a scrap ledger month by month, and record partner capital and cash movements.',
  },
  {
    title: 'PDF export',
    body:
      'Turn any sales list, purchase record, payment log, or report into a shareable PDF in one tap.',
  },
];

const segments = [
  {
    label: 'Retail & trading',
    items: ['Kiryana stores', 'Wholesalers', 'General traders', 'Distributors'],
  },
  {
    label: 'Supply & service',
    items: ['Small manufacturers', 'Scrap dealers', 'Repeat-order suppliers'],
  },
  {
    label: 'Growing SMEs',
    items: ['Multi-partner firms', 'Businesses tracking capital & cash in/out'],
  },
];

const trust = [
  {
    title: 'Works fully offline',
    body: 'Every voucher saves to SQLite on your phone first. No signal, no problem.',
  },
  {
    title: 'Secure by default',
    body: 'Firebase Authentication with password reset — your account, protected.',
  },
  {
    title: 'Your data stays yours',
    body: 'Local-first storage, with an optional path to cloud backup and sync.',
  },
  {
    title: 'Built for Indian business',
    body: '₹ formatting, khata-style ledger logic, and Miracle-inspired accuracy.',
  },
];

const problemSolution = [
  { dr: 'Paper khata gets lost or torn', cr: 'Digital SQLite storage, backed up' },
  { dr: 'Customer and supplier in separate books', cr: 'One unified party directory' },
  { dr: 'No real-time view of the business', cr: 'Dashboard KPIs and monthly charts' },
  { dr: 'Phone lost, data lost', cr: 'Local database + secure account + sync path' },
  { dr: 'Enterprise software is too complex', cr: 'One simple app, built for shop owners' },
];

const faqs = [
  {
    q: 'Is HisabMitra free to use?',
    a: 'Yes — start free. Every core feature works from day one: billing, ledger, payments, and reports.',
  },
  {
    q: 'Does it work without internet?',
    a: 'Yes. HisabMitra is offline-first — vouchers, ledgers, and reports all save locally on your phone with SQLite, no connection required.',
  },
  {
    q: 'Is my business data safe?',
    a: 'Your books stay on your device and behind a secure Firebase login. Nothing is sold, and cloud sync is opt-in.',
  },
  {
    q: 'Can one contact be both customer and supplier?',
    a: 'Yes — this is exactly what HisabMitra was built to solve. Parties are merged by name into one combined ledger.',
  },
  {
    q: 'Which platforms is it available on?',
    a: 'HisabMitra is built with Flutter and runs on Android, iOS, and Web from a single codebase.',
  },
  {
    q: 'Do I need accounting knowledge to use it?',
    a: 'No. If you can fill in a bill, you can use HisabMitra — the ledger logic runs quietly in the background.',
  },
];

function Grommet() {
  return <span className="grommet" aria-hidden="true" />;
}

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="thread-spine hidden sm:block" aria-hidden="true" />

      {/* NAV */}
      <header className="relative z-10 border-b border-paper/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 pl-16 md:pl-24">
          <span className="font-display text-lg font-semibold tracking-tight text-paper">
            Hisab<span className="text-thread">Mitra</span>
          </span>
          <nav className="hidden gap-8 font-body text-sm text-paperdim md:flex">
            <a className="focus-ring hover:text-paper" href="#features">Features</a>
            <a className="focus-ring hover:text-paper" href="#who-its-for">Who it&rsquo;s for</a>
            <a className="focus-ring hover:text-paper" href="#faq">FAQ</a>
          </nav>
          <Link
            href="#cta"
            className="focus-ring rounded-sm border border-brass/40 px-4 py-2 font-body text-sm text-brass transition hover:bg-brass/10"
          >
            Request demo
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative z-10 pl-16 pr-6 pt-16 md:pl-24 md:pr-12 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-brass">
                Offline-first · Free to start
              </p>
              <h1 className="font-display text-4xl font-medium leading-[1.08] text-paper sm:text-5xl md:text-6xl">
                The khata that never gets lost, out of balance, or out of date.
              </h1>
              <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-paperdim">
                HisabMitra turns sales, purchases, and payments into one unified party
                ledger — updated the moment you enter a voucher, readable at a glance,
                built for how Indian shops actually keep accounts.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#cta"
                  className="focus-ring rounded-sm bg-thread px-6 py-3 font-body text-sm font-semibold text-paper transition hover:bg-thread/90"
                >
                  Request a demo
                </a>
                <a
                  href="#cta"
                  className="focus-ring rounded-sm border border-paper/20 px-6 py-3 font-body text-sm font-semibold text-paper transition hover:border-paper/40"
                >
                  Download APK (Beta)
                </a>
              </div>
              <p className="mt-6 font-mono text-xs text-paperdim">
                Android · iOS · Web — one Flutter codebase
              </p>
            </div>

            <div className="relative">
              <div className="ledger-card rounded-md p-6 shadow-2xl shadow-black/40">
                <div className="flex items-center justify-between border-b border-paper/10 pb-4">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-paperdim">
                      Dashboard · June 2026
                    </p>
                    <p className="font-display text-xl text-paper">Aaj no Hisab</p>
                  </div>
                  <span className="rounded-full bg-ledger/15 px-3 py-1 font-mono text-xs text-ledger">
                    +12% vs May
                  </span>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3">
                  <div>
                    <p className="font-mono text-[11px] text-paperdim">Sales</p>
                    <p className="tabular font-mono text-lg text-paper">₹1,20,000</p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] text-paperdim">Purchases</p>
                    <p className="tabular font-mono text-lg text-paper">₹77,500</p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] text-paperdim">Profit</p>
                    <p className="tabular font-mono text-lg text-ledger">₹42,500</p>
                  </div>
                </div>
                <div className="mt-6 space-y-3 border-t border-paper/10 pt-5">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-paperdim">
                    Party statement
                  </p>
                  {[
                    { name: 'Ramesh Traders', tag: 'Dr · 62 din baaki', amt: '₹3,380' },
                    { name: 'Dinesh Kathwadia', tag: 'Dr · 45 din baaki', amt: '₹2,800' },
                    { name: 'Milk Supply Co.', tag: 'Cr · Purchase', amt: '−₹800' },
                  ].map((row) => (
                    <div key={row.name} className="flex items-center justify-between">
                      <div>
                        <p className="font-body text-sm text-paper">{row.name}</p>
                        <p className="font-mono text-[11px] text-paperdim">{row.tag}</p>
                      </div>
                      <p className="tabular font-mono text-sm text-paper">{row.amt}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative z-10 pl-16 pr-6 pt-28 md:pl-24 md:pr-12">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brass">How it works</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium text-paper sm:text-4xl">
            From one voucher to a complete picture of the business.
          </h2>

          <div className="mt-14 space-y-10">
            {[
              {
                no: 'Entry 01',
                title: 'Create a voucher',
                body: 'Add a multi-line sales or purchase bill with date, notes, and payment status — Paid, Partial, or Unpaid.',
              },
              {
                no: 'Entry 02',
                title: 'It lands in the right ledger',
                body: 'The party ledger updates on its own with debit and credit entries — customer and supplier merged if they\u2019re the same person.',
              },
              {
                no: 'Entry 03',
                title: 'See where you stand',
                body: 'Open the dashboard for KPIs, monthly trends, and every pending due — before you shut shop.',
              },
            ].map((step) => (
              <div key={step.no} className="relative flex flex-col gap-2 border-b border-paper/10 pb-10 md:flex-row md:items-baseline md:gap-10">
                <Grommet />
                <span className="font-mono text-xs text-thread">{step.no}</span>
                <div>
                  <h3 className="font-display text-2xl text-paper">{step.title}</h3>
                  <p className="mt-2 max-w-xl font-body text-paperdim">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="relative z-10 pl-16 pr-6 pt-28 md:pl-24 md:pr-12">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brass">Everything included</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium text-paper sm:text-4xl">
            One app for the whole business cycle.
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="ledger-card rounded-md p-6">
                <h3 className="font-display text-xl text-paper">{f.title}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-paperdim">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section id="who-its-for" className="relative z-10 pl-16 pr-6 pt-28 md:pl-24 md:pr-12">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brass">Who it&rsquo;s for</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium text-paper sm:text-4xl">
            Built for every kind of trading business.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {segments.map((s) => (
              <div key={s.label} className="ledger-card rounded-md p-6">
                <h3 className="font-display text-lg text-brass">{s.label}</h3>
                <ul className="mt-4 space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="font-body text-sm text-paperdim">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="relative z-10 pl-16 pr-6 pt-28 md:pl-24 md:pr-12">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brass">Built to trust</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium text-paper sm:text-4xl">
            A ledger you can rely on.
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {trust.map((t) => (
              <div key={t.title} className="border-l-2 border-thread/60 pl-5">
                <h3 className="font-display text-lg text-paper">{t.title}</h3>
                <p className="mt-2 font-body text-sm text-paperdim">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM / SOLUTION — Dr / Cr */}
      <section className="relative z-10 pl-16 pr-6 pt-28 md:pl-24 md:pr-12">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brass">Why it&rsquo;s different</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium text-paper sm:text-4xl">
            Every old problem, closed out.
          </h2>

          <div className="mt-12 overflow-hidden rounded-md border border-paper/10">
            <div className="grid grid-cols-2 bg-surface2 font-mono text-xs uppercase tracking-widest text-paperdim">
              <div className="border-r border-paper/10 px-6 py-3">Dr — the old way</div>
              <div className="px-6 py-3">Cr — with HisabMitra</div>
            </div>
            {problemSolution.map((row, i) => (
              <div
                key={row.dr}
                className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-surface' : 'bg-ink'}`}
              >
                <div className="border-r border-t border-paper/10 px-6 py-4 font-body text-sm text-paperdim">
                  {row.dr}
                </div>
                <div className="border-t border-paper/10 px-6 py-4 font-body text-sm text-paper">
                  {row.cr}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative z-10 pl-16 pr-6 pt-28 md:pl-24 md:pr-12">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brass">FAQ</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium text-paper sm:text-4xl">
            Questions, answered.
          </h2>

          <div className="mt-10 max-w-3xl divide-y divide-paper/10 border-t border-paper/10">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="focus-ring flex cursor-pointer list-none items-center justify-between font-body text-base text-paper">
                  {f.q}
                  <span className="ml-4 font-mono text-brass transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-2xl font-body text-sm leading-relaxed text-paperdim">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="cta" className="relative z-10 pl-16 pr-6 pb-28 pt-28 md:pl-24 md:pr-12">
        <div className="mx-auto max-w-6xl">
          <div className="ledger-card rounded-md px-8 py-14 text-center sm:px-16">
            <h2 className="font-display text-3xl font-medium text-paper sm:text-4xl">
              Ready to close the paper khata?
            </h2>
            <p className="mx-auto mt-4 max-w-md font-body text-paperdim">
              Move your billing, ledger, and payments into one app that keeps balance for you.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:chintan.savsani2002@gmail.com"
                className="focus-ring rounded-sm bg-thread px-6 py-3 font-body text-sm font-semibold text-paper transition hover:bg-thread/90"
              >
                Request a demo
              </a>
              <a
                href="#"
                className="focus-ring rounded-sm border border-paper/20 px-6 py-3 font-body text-sm font-semibold text-paper transition hover:border-paper/40"
              >
                Download APK (Beta)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-paper/10 pb-10 pl-16 pr-6 pt-10 md:pl-24 md:pr-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <span className="font-display text-lg font-semibold text-paper">
              Hisab<span className="text-thread">Mitra</span>
            </span>
            <p className="mt-2 max-w-xs font-body text-sm text-paperdim">
              Your accounting friend for modern Indian business.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 font-body text-sm text-paperdim sm:flex sm:gap-16">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-brass">Menu</p>
              <ul className="space-y-2">
                <li><a className="focus-ring hover:text-paper" href="#features">Features</a></li>
                <li><a className="focus-ring hover:text-paper" href="#who-its-for">Who it&rsquo;s for</a></li>
                <li><a className="focus-ring hover:text-paper" href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-brass">Legal</p>
              <ul className="space-y-2">
                <li><a className="focus-ring hover:text-paper" href="/privacy">Privacy Policy</a></li>
                <li><a className="focus-ring hover:text-paper" href="/terms">Terms of Service</a></li>
                <li><a className="focus-ring hover:text-paper" href="/delete-account">Delete Account</a></li>
                <li><a className="focus-ring hover:text-paper" href="mailto:chintan.savsani2002@gmail.com">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-6xl font-mono text-xs text-paperdim">
          © 2026 HisabMitra. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
