import { useEffect, useRef } from 'react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import '@/styles/tailwind.css'
import 'focus-visible'

import TagManager from 'react-gtm-module'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  useEffect(() => {
    // Create script element
    const script = document.createElement('script')

    // Set script attributes
    script.src =
      'https://app.termly.io/resource-blocker/e5989bc1-23f6-49eb-ad6a-ad9c018e093f?autoBlock=on'
    script.type = 'text/javascript'

    // Append script to the body
    document.body.appendChild(script)

    // Initialize Tag Manager
    TagManager.initialize({ gtmId: 'GTM-WJXD68H' })
  }, [])

  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}
