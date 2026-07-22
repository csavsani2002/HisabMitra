import Link from 'next/link';

export default function Header() {
  return (
    <header className="relative z-10 border-b border-paper/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 pl-16 md:pl-24">
        <Link
          href="/"
          className="focus-ring font-display text-lg font-semibold tracking-tight text-paper"
        >
          Hisab<span className="text-thread">Mitra</span>
        </Link>
        <nav className="hidden gap-8 font-body text-sm text-paperdim md:flex">
          <Link className="focus-ring hover:text-paper" href="/#features">
            Features
          </Link>
          <Link className="focus-ring hover:text-paper" href="/#who-its-for">
            Who it&rsquo;s for
          </Link>
          <Link className="focus-ring hover:text-paper" href="/#faq">
            FAQ
          </Link>
        </nav>
        <Link
          href="/#cta"
          className="focus-ring rounded-sm border border-brass/40 px-4 py-2 font-body text-sm text-brass transition hover:bg-brass/10"
        >
          Request demo
        </Link>
      </div>
    </header>
  );
}
