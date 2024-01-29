import type { NextPage } from 'next'
import Head from 'next/head'

import HomePage from '@/components/HomePage'
import PublicLayout from '@/components/layouts/PublicLayout'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mares Popa - Looking for a website?</title>
        <meta
          name="description"
          content="One Page Funnel meticulously crafted to take your business to new heights beyond social media."
        />
      </Head>
      <PublicLayout>
        <HomePage />
      </PublicLayout>
    </>
  )
}

export default Home
