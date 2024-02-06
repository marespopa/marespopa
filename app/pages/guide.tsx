import type { NextPage } from 'next'
import Head from 'next/head'

import GuidePage from '@/components/guide/GuidePage'
import PublicLayout from '@/components/layouts/PublicLayout'

const Review: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mares Popa - Get a free review of your website!</title>
        <meta
          name="description"
          content={`Download our comprehensive ebook, 'The Recipe for a Perfect Website:
           A Comprehensive Guide to Optimizing Website Loading Speed in 2024,' and unlock
           the secrets to lightning-fast websites. Discover expert strategies and actionable tips to
          enhance your website's performance, improve user experience, and boost search engine rankings.
         Don't let slow loading times hold your website back – take the first step towards optimization success today!`}
        />
      </Head>
      <PublicLayout>
        <GuidePage />
      </PublicLayout>
    </>
  )
}

export default Review
