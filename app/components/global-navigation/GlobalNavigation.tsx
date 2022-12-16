import React, { useState } from 'react'

import Icon from '../../utils/Icon'
import GlobalLinks from './GlobalLinks'
import GlobalLogo from './GlobalLogo'

const GlobalNavigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const hamburgerClosed = <Icon type="close" size={18} />
  const hamburgerOpen = <Icon type="hamburger" size={18} />

  return (
    <header>
      <nav className="w-full bg-blue-100 shadow-sm">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <GlobalLogo />
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-blue-700 focus:border"
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
      </nav>
    </header>
  )
}

export default GlobalNavigation
