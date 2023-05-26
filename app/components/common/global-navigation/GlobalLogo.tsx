import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import logo from '../../../public/logo.svg'

const GlobalLogo = () => {
  const logoHeight = 32

  return (
    <Link
      href="/"
      className="flex items-center text-sm font-medium text-left capitalize hover:transition-all ease-in-out duration-150 motion-reduce:transition-none hover:transform hover:scale-125"
    >
      <Image src={logo} alt="Mares Popa" height={logoHeight} />
    </Link>
  )
}

export default GlobalLogo
