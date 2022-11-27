import Link from 'next/link'
import React from 'react'
import { Container } from '../layouts/PublicLayout'

const GlobalFooter = () => {
  return (
    <footer className="py-5 border-t border-gray-200">
      <Container>
        <nav className="my-5">
          <ul>
            <li>
              <Link
                href="/privacy-policy"
                className="text-sm font-medium text-center capitalize"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
      <Container>
        <p className="text-sm font-medium text-center capitalize">
          copyright Mares Popa © {new Date().getFullYear()}. All rights reserved
        </p>
      </Container>
    </footer>
  )
}

export default GlobalFooter
