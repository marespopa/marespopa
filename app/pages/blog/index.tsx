import type { NextPage } from 'next'
import Head from 'next/head'

import BlogPage from '../../components/BlogPage.tsx'

const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mares Popa - Frontend Engineer - Blog</title>
        <meta
          name="description"
          content="A Next.js cookie consent banner with TypeScript and Tailwind CSS."
        />
      </Head>
      <BlogPage />
    </>
  )
}

export default Blog
