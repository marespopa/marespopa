import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

import Container from '@/components/container/Container'
import Icon from '@/utils/Icon'

import GlobalLinks from './GlobalLinks'
import GlobalLogo from './GlobalLogo'

const GlobalNavigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const hamburgerClosed = <Icon type="close" size={18} />
  const hamburgerOpen = <Icon type="hamburger" size={18} />
  const { asPath } = useRouter()
  const isFunnel = asPath.includes('funnel')

  return (
    <header className="bg-emerald-900 md:bg-emerald-900">
      <nav className="w-full">
        <Container>
          <div className="justify-between mx-auto lg:max-w-7xl items-center flex">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <GlobalLogo />
                {!isFunnel && (
                  <div className="md:hidden">
                    <button
                      className="p-2 text-white rounded-md outline-none focus:border-white focus:border"
                      onClick={() => setIsNavOpen(!isNavOpen)}
                    >
                      {isNavOpen ? hamburgerOpen : hamburgerClosed}
                    </button>
                  </div>
                )}
              </div>
            </div>
            {isFunnel && (
              <ul className="items-center justify-center flex md:space-x-6 md:space-y-0">
                <li className={menuItemStyle}>
                  <Link href="/funnel#contact" className={linkButtonStyle}>
                    Get in touch
                  </Link>
                </li>
              </ul>
            )}
            {!isFunnel && (
              <div>
                <div
                  className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                    isNavOpen ? 'block' : 'hidden'
                  }`}
                >
                  <GlobalLinks />
                </div>
              </div>
            )}
          </div>
        </Container>
      </nav>
    </header>
  )
}

const menuItemStyle =
  'text-white hover:transition-all duration-150 ease-in-out md:hover:text-teal-300 md:focus:text-teal-300 hover:underline focus:underline'

const linkButtonStyle =
  'flex items-center text-sm font-medium text-center capitalize hover:transition-all bg-yellow-300 hover:bg-yellow-400 focus:bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded duration-150 ease-in-out'

export default GlobalNavigation
