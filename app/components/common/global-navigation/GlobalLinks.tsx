import Link from 'next/link'
import React from 'react'

import SVGLink from '@/components/icons/SVGLink'
import Icon from '@/utils/Icon'

const GlobalLinks = () => {
  return (
    <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
      <li className={menuItemStyle}>
        <Link href="/" className={linkStyle}>
          Home
        </Link>
      </li>
      <li className={menuItemStyle}>
        <Link href="#about" className={linkStyle}>
          About
        </Link>
      </li>

      <li className={menuItemStyle}>
        <Link href="#experience" className={linkStyle}>
          Experience
        </Link>
      </li>
      <li className={menuItemStyle}>
        <Link href="#skills" className={linkStyle}>
          Skills
        </Link>
      </li>
      <li className={menuItemStyle}>
        <Link href="#projects" className={linkStyle}>
          Projects
        </Link>
      </li>
      <li className={menuItemStyle}>
        <Link href="#contact" className={linkStyle}>
          Contact
        </Link>
      </li>
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
    </ul>
  )
}

const menuItemStyle =
  'text-white hover:transition-all duration-150 ease-in-out hover:text-blue-300 focus:text-blue-300 hover:underline focus:underline'

const linkStyle =
  'flex items-center text-sm font-medium text-center capitalize hover:transition-all duration-150 ease-in-out'

export default GlobalLinks
