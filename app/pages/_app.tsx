import '../styles/globals.scss'

import type { AppProps } from 'next/app'
import { Roboto_Mono } from 'next/font/google'
import Script from 'next/script'

const fontFamily = Roboto_Mono({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

function MyApp({ Component, pageProps }: AppProps) {
  const PageComponent = Component as any

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <PageComponent className={fontFamily.variable} {...pageProps} />
    </>
  )
}

export default MyApp
