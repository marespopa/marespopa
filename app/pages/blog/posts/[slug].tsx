import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

import PostPage from '@/components/blog/Posts/PostPage'
import ButtonLink from '@/components/common/ButtonLink'

import Container from '../../../components/container/Container'
import PublicLayout from '../../../components/layouts/PublicLayout'
import { getAllPosts, getPostBySlug } from '../../../lib/api'

type Props = {
  post: any
}

export default function Post({ post }: Props) {
  const router = useRouter()
  const title = `${post.title} | Mares Popa`
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="A Next.js cookie consent banner with TypeScript and Tailwind CSS."
        />
      </Head>
      <PostPage post={post} />
    </>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = post.content || ''

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
