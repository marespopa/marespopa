import Link from 'next/link'
import React from 'react'

function NavLinks() {
  return (
    <ul className="flex flex-col p-4 mt-4  border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
      <li>
        <Link
          href="#"
          className="block py-2 pr-4 pl-3 text-white md:bg-transparent md:p-0 "
          aria-current="page"
        >
          Home
        </Link>
      </li>
    </ul>
  )
}

export default NavLinks
