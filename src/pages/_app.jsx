import { useState, useEffect, useRef } from 'react'
import TagManager from 'react-gtm-module'
import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import '@/styles/tailwind.css'
import 'focus-visible'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  const [isMounted, setIsMounted] = useState(false)
  let previousPathname = usePrevious(router.pathname)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    // Add Termly script
    if (!window.termlyInitialized) {
      const termlyScript = document.createElement('script')
      termlyScript.src =
        'https://app.termly.io/resource-blocker/e5989bc1-23f6-49eb-ad6a-ad9c018e093f'
      termlyScript.async = false
      document.head.prepend(termlyScript)
      window.termlyInitialized = true
    }

    // Initialize GTM using react-gtm-module
    if (!window.gtmInitialized) {
      TagManager.initialize({ gtmId: 'GTM-WJXD68H' })
      window.gtmInitialized = true
    }
  }, [])

  if (!isMounted) {
    return null // or a loading spinner, etc.
  }

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
