import Link from 'next/link'
import React from 'react'

import Icon from '../../utils/Icon'

const GlobalLinks = () => {
  return (
    <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
      <li className="text-white hover:text-gray-200">
        <Link
          href="/"
          className="flex items-center text-sm font-medium text-center capitalize"
        >
          Home
        </Link>
      </li>
      <li className="text-white hover:text-gray-200">
        <Link
          href="/blog"
          className="flex items-center text-sm font-medium text-center capitalize"
        >
          Blog
        </Link>
      </li>
      <li className="text-white hover:text-gray-200">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/mares-popa/"
          rel="noopener noreferrer"
          className="flex items-center text-sm font-medium text-center capitalize"
        >
          <span className="mr-1">LinkedIn</span>
          <Icon type="extLink" />
        </a>
      </li>
    </ul>
  )
}

export default GlobalLinks
