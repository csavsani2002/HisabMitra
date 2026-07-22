import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-paper/10 pb-10 pl-16 pr-6 pt-10 md:pl-24 md:pr-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Link href="/" className="focus-ring font-display text-lg font-semibold text-paper">
            Hisab<span className="text-thread">Mitra</span>
          </Link>
          <p className="mt-2 max-w-xs font-body text-sm text-paperdim">
            Your accounting friend for modern Indian business.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 font-body text-sm text-paperdim sm:flex sm:gap-16">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-brass">Menu</p>
            <ul className="space-y-2">
              <li>
                <Link className="focus-ring hover:text-paper" href="/#features">
                  Features
                </Link>
              </li>
              <li>
                <Link className="focus-ring hover:text-paper" href="/#who-its-for">
                  Who it&rsquo;s for
                </Link>
              </li>
              <li>
                <Link className="focus-ring hover:text-paper" href="/#faq">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-brass">Legal</p>
            <ul className="space-y-2">
              <li>
                <Link className="focus-ring hover:text-paper" href="/privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="focus-ring hover:text-paper" href="/terms">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link className="focus-ring hover:text-paper" href="/delete-account">
                  Delete Account
                </Link>
              </li>
              <li>
                <a className="focus-ring hover:text-paper" href="mailto:chintan.savsani2002@gmail.com">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl font-mono text-xs text-paperdim">
        © 2026 HisabMitra. All rights reserved.
      </p>
    </footer>
  );
}
