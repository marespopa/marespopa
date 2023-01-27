import Link from 'next/link'
import React from 'react'

import Container from '../container/Container'

const GlobalFooter = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-5 bg-gray-800">
      <Container>
        <div className="text-gray-200">
          <p className="text-2xl mt-4 text-center sm:text-left">
            Thank you for visiting my website!
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
