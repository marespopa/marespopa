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
    <header>
      <nav className="w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600">
        <Container>
          <div className="justify-between mx-auto lg:max-w-7xl md:items-center md:flex">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
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
