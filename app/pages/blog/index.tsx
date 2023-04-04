import { getAllPosts } from 'lib/api'
import Head from 'next/head'
import { BlogPost } from 'types'

import PublicLayout from '@/components/common/layouts/PublicLayout'

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
      <PublicLayout>
        <section className="bg-gradient-to-br from-slate-50 to-gray-100">
          {JSON.stringify(posts)}
        </section>
      </PublicLayout>
    </>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const posts = getAllPosts(['slug', 'title'])

  return {
    props: {
      posts,
    },
  }
}
