import type { NextPage } from 'next'
import Head from 'next/head'

import PublicLayout from '@/components/layouts/PublicLayout'
import ReviewPage from '@/components/review/ReviewPage'

const Review: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mares Popa - Frontend Engineer</title>
        <meta
          name="description"
          content="A Next.js cookie consent banner with TypeScript and Tailwind CSS."
        />
      </Head>
      <PublicLayout>
        <ReviewPage />
      </PublicLayout>
    </>
  )
}

export default Review
