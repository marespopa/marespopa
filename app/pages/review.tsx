import type { NextPage } from 'next'
import Head from 'next/head'

import PublicLayout from '@/components/layouts/PublicLayout'
import ReviewPage from '@/components/review/ReviewPage'

const Review: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mares Popa - Get a free review of your website!</title>
        <meta
          name="description"
          content={`Get a free review of your website delivered to your inbox in 1-3 business days from a professional website developer with almost a decade of experience.`}
        />
      </Head>
      <PublicLayout>
        <ReviewPage />
      </PublicLayout>
    </>
  )
}

export default Review
