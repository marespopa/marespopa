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
  const showOnlyCTA = asPath.includes('funnel') || asPath.includes('review')
  const formLink = asPath.includes('funnel')
    ? '/funnel#contact'
    : '/review#reviewForm'

  return (
    <header className="bg-fuchsia-900 md:bg-fuchsia-900">
      <nav className="w-full">
        <Container>
          <div className="mx-auto lg:max-w-7xl md:items-center md:flex md:justify-between ">
            <div className="flex items-center justify-between py-3 md:py-5 md:w-full">
              <GlobalLogo />
              {!showOnlyCTA && (
                <div className="md:hidden">
                  <button
                    className="p-2 text-white rounded-md outline-none focus:border-white focus:border"
                    onClick={() => setIsNavOpen(!isNavOpen)}
                  >
                    {isNavOpen ? hamburgerOpen : hamburgerClosed}
                  </button>
                </div>
              )}

              {showOnlyCTA && (
                <Link href={formLink} className={linkButtonStyle}>
                  Get in touch
                </Link>
              )}
            </div>
            {!showOnlyCTA && (
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

const linkButtonStyle =
  'ml-auto flex items-center text-sm font-medium text-center capitalize hover:transition-all bg-yellow-300 hover:bg-yellow-400 focus:bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded duration-150 ease-in-out'

export default GlobalNavigation
