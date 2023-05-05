import Link from 'next/link'
import React from 'react'

import SVGLink from '@/components/icons/SVGLink'
import Icon from '@/utils/Icon'

const GlobalLinks = () => {
  return (
    <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
      <li className={linkStyle}>
        <Link
          href="/"
          className="flex items-center text-sm font-medium text-center capitalize"
        >
          Home
        </Link>
      </li>
      <li className={linkStyle}>
        <Link
          href="#about"
          className="flex items-center text-sm font-medium text-center capitalize"
        >
          About
        </Link>
      </li>

      <li className={linkStyle}>
        <Link
          href="#experience"
          className="flex items-center text-sm font-medium text-center capitalize"
        >
          Experience
        </Link>
      </li>
      <li className={linkStyle}>
        <Link
          href="#skills"
          className="flex items-center text-sm font-medium text-center capitalize"
        >
          Skills
        </Link>
      </li>
      <li className={linkStyle}>
        <Link
          href="#projects"
          className="flex items-center text-sm font-medium text-center capitalize"
        >
          Projects
        </Link>
      </li>
      <li className={linkStyle}>
        <Link
          href="#contact"
          className="flex items-center text-sm font-medium text-center capitalize"
        >
          Contact
        </Link>
      </li>
      <li className={linkStyle}>
        <Link
          href="/blog"
          className="flex items-center text-sm font-medium text-center capitalize"
        >
          Blog
        </Link>
      </li>
      <li className={linkStyle}>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/mares-popa/"
          rel="noopener noreferrer"
          className="flex items-center text-sm font-medium text-center capitalize"
        >
          <span className="mr-1">LinkedIn</span>
          <SVGLink />
        </a>
      </li>
    </ul>
  )
}
const linkStyle =
  'text-white hover:text-blue-300 focus:text-blue-300 hover:underline focus:underline'

export default GlobalLinks
