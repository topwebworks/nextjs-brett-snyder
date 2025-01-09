import Link from 'next/link'

import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="pt-10 pb-16 border-t border-zinc-100 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/articles">Articles</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/uses">Uses</NavLink>
              </div>
              <p className="w-full mx-auto text-xs text-center text-zinc-400 dark:text-zinc-500 sm:text-sm">
                &copy; {new Date().getFullYear()} Brett Snyder.
                All&nbsp;rights&nbsp;reserved.
              </p>
              <p className="mx-auto max-w-[750px] pt-4 text-center text-[11px] text-zinc-400 dark:text-zinc-500">
                <strong>Cookies:</strong> I use basic Google cookies
                to follow country, and page view stats. YouTube and Chat cookies
                pulled from Master Blocks article demos. No PII is collected.
                BrettSnyder.me is a noncommercial site about me that does not
                monetize or sell lead&nbsp;information.{' '}
                <a
                  id="cookie-preferences"
                  href="#"
                  className="underline termly-display-preferences"
                >
                  Preferences
                </a>
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
