import React from 'react'
import ReactMarkdown from 'react-markdown'
import { BlogPost } from 'types'

import ButtonLink from '@/components/common/ButtonLink'
import ErrorPage from '@/components/common/ErrorPage'
import Container from '@/components/container/Container'
import PublicLayout from '@/components/layouts/PublicLayout'

type Props = {
  post: BlogPost
}

const PostPage = ({ post }: Props) => {
  if (!post.content) {
    return <ErrorPage statusCode={500} />
  }

  return (
    <PublicLayout>
      <section className="bg-gradient-to-br from-slate-50 to-gray-100">
        <Container>
          <div className="pt-8">
            <article className=" mb-4 prose">
              <span className="text-sm text-gray-500">{post?.date}</span>
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </article>
            <ButtonLink url={`/blog`} label={`Back to blog`} />
          </div>
        </Container>
      </section>
    </PublicLayout>
  )
}

export default PostPage
