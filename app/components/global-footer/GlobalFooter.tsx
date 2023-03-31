import Link from 'next/link'
import React, { useEffect, useMemo, useState } from 'react'

import Container from '../container/Container'

const GlobalFooter = () => {
  const currentYear = new Date().getFullYear()
  const LIST_OF_PHRASES = useMemo(
    () => [
      'Keep it simple!',
      'Thank you for visiting my website!',
      "There's always something to learn!",
    ],
    [],
  )

  const [catchPhrase, setCatchPhrase] = useState<string>('')

  useEffect(() => {
    setCatchPhrase(
      LIST_OF_PHRASES[Math.floor(Math.random() * LIST_OF_PHRASES.length)],
    )
  }, [LIST_OF_PHRASES])

  return (
    <footer className="py-5 bg-gray-800">
      <Container>
        <div className="text-gray-200">
          <p className="text-2xl mt-4 text-center sm:text-left">
            {catchPhrase}
          </p>
          <div className="my-4 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="order-2 md:order-1 md:mt-0">
              &copy; Mares Popa {currentYear}. All rights reserved
            </p>
            <div className="order-1 md:order-2">
              <span className="px-2 hover:underline focus:underline">
                <a href="mailto:hello@marespopa.com">Contact me</a>
              </span>
              <span className="px-2 border-l hover:underline focus:underline">
                <Link href="/privacy-policy">Privacy Policy</Link>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default GlobalFooter
