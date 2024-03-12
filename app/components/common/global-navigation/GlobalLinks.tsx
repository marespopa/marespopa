import Link from 'next/link'
import React from 'react'

import SVGLink from '@/components/icons/SVGLink'

const GlobalLinks = () => {
  return (
    <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
      <li className={menuItemStyle}>
        <Link href="/blog" className={linkStyle}>
          Blog
        </Link>
      </li>
      <li className={menuItemStyle}>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/mares-popa/"
          rel="noopener noreferrer"
          className={linkStyle}
        >
          <span className="mr-1">LinkedIn</span>
          <SVGLink />
        </a>
      </li>
      <li className={menuItemStyle}>
        <a
          target="_blank"
          href="https://www.instagram.com/mares.uiux/"
          rel="noopener noreferrer"
          className={linkStyle}
        >
          <span className="mr-1">Instagram</span>
          <SVGLink />
        </a>
      </li>
      <li className={menuItemStyle}>
        <Link href="/#contact" className={linkButtonStyle}>
          Contact
        </Link>
      </li>
    </ul>
  )
}

const menuItemStyle =
  'text-white hover:transition-all duration-150 ease-in-out md:hover:text-teal-300 md:focus:text-teal-300 hover:underline focus:underline'

const linkStyle =
  'px-4 py-2 rounded md:py-0 md:px-0 bg-teal-700 hover:bg-teal-800 md:hover:bg-transparent md:bg-transparent flex items-center text-sm font-medium text-center capitalize hover:transition-all duration-150 ease-in-out'

const linkButtonStyle =
  'flex items-center text-sm font-medium text-center capitalize hover:transition-all bg-yellow-300 hover:bg-yellow-400 focus:bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded duration-150 ease-in-out'

export default GlobalLinks
