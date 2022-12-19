import { ReactNode } from 'react'

import CookieConsent from '../banners/CookieConsent'
import GlobalFooter from '../global-footer/GlobalFooter'
import GlobalNavigation from '../global-navigation/GlobalNavigation'
import Seo from '../Seo'

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Seo />
      <div className="flex flex-col min-h-screen">
        <GlobalNavigation />
        <main className="flex-grow">{children}</main>
        <GlobalFooter />
        <CookieConsent />
      </div>
    </>
  )
}

export default PublicLayout
