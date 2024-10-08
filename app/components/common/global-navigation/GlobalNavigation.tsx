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

  return (
    <header className="bg-fuchsia-900 md:bg-fuchsia-900">
      <nav className="w-full">
        <Container>
          <div className="mx-auto lg:max-w-7xl md:items-center md:flex md:justify-between ">
            <div className="flex items-center justify-between py-3 md:py-5 md:w-full">
              <GlobalLogo />
              <div className="md:hidden">
                <button
                  className="p-2 text-white rounded-md outline-none focus:border-white focus:border"
                  onClick={() => setIsNavOpen(!isNavOpen)}
                >
                  {isNavOpen ? hamburgerOpen : hamburgerClosed}
                </button>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  isNavOpen ? 'block' : 'hidden'
                }`}
              >
                <GlobalLinks />
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  )
}

export default GlobalNavigation
