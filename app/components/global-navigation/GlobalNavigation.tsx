import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/logo.svg'
import { Container } from '../layouts/PublicLayout'

const GlobalNavigation = () => {
  const logoHeight = 156

  return (
    <header className="flex items-center shadow-sm h-14 bg-white px-2 sm:px-4 py-2.5">
      <nav className="container flex flex-wrap items-center justify-between mx-auto">
        <Link
          href="/"
          className="flex items-center text-sm font-medium text-center capitalize"
        >
          <Image src={logo} alt="Mares Popa" height={logoHeight} />
        </Link>
      </nav>
    </header>
  )
}

export default GlobalNavigation
