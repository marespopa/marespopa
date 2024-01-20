import { ReactNode } from 'react'

import CookieConsent from '../common/banners/CookieConsent'
import GlobalFooter from '../common/global-footer/GlobalFooter'
import GlobalNavigation from '../common/global-navigation/GlobalNavigation'
import Seo from '../common/Seo'

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Seo />
      <div className="flex flex-col font-mono min-h-screen bg-gradient-to-b from-teal-950 to-cyan-950 text-white">
        <GlobalNavigation />
        <main className="flex-grow">{children}</main>
        <GlobalFooter />
        <CookieConsent />
      </div>
    </>
  )
}

export default PublicLayout
