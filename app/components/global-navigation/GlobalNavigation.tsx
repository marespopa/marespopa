import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/logo.svg'
import { Container } from '../layouts/PublicLayout'

const GlobalNavigation = () => {
  const logoHeight = 156

  return (
    <header className="flex items-center border-b border-gray-200 h-14">
      <Container>
        <nav>
          <ul>
            <li>
              <Link
                href="/"
                className="text-sm font-medium text-center capitalize"
              >
                <Image src={logo} alt="Mares Popa" height={logoHeight} />
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default GlobalNavigation
