import { getAllPosts } from 'lib/api'
import Head from 'next/head'
import { BlogPost } from 'types'

import BlogPage from '@/components/blog/BlogPage'

type Props = {
  posts: BlogPost[]
}

export default function Post({ posts }: Props) {
  const title = `Blog | Mares Popa`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="A Next.js cookie consent banner with TypeScript and Tailwind CSS."
        />
      </Head>
      <BlogPage posts={posts} />
    </>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const posts = getAllPosts(['slug', 'title', 'description', 'date'])

  return {
    props: {
      posts,
    },
  }
}
