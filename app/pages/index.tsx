import type { NextPage } from 'next'
import Head from 'next/head'

import HomePage from '@/components/HomePage'
import PublicLayout from '@/components/layouts/PublicLayout'

const Home: NextPage = () => {
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
        <HomePage />
      </PublicLayout>
    </>
  )
}

export default Home
