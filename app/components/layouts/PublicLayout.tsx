import { ReactNode } from 'react'
import CookieConsent from '../banners/CookieConsent'
import GlobalFooter from '../global-footer/GlobalFooter'
import GlobalNavigation from '../global-navigation/GlobalNavigation'
import Seo from '../Seo'

export const Container = ({ children }: { children: ReactNode }) => (
  <div className="w-full max-w-5xl px-2 mx-auto md:px-4">{children}</div>
)

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Seo />
      <div className="flex flex-col min-h-screen">
        <GlobalNavigation />
        <main className="flex-grow">
          <Container>{children}</Container>
        </main>
        <GlobalFooter />
        <CookieConsent />
      </div>
    </>
  )
}

export default PublicLayout
