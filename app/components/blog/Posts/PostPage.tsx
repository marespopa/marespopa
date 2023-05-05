import React from 'react'
import ReactMarkdown from 'react-markdown'
import { BlogPost } from 'types'

import ErrorPage from '@/components/common/ErrorPage'
import ReadMoreLink from '@/components/common/ReadMoreLink'
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
      <section>
        <Container>
          <div className="my-8">
            <article className="prose prose-invert">
              <span className="text-sm text-white">{post?.date}</span>
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </article>
            <ReadMoreLink url={`/blog`} label={`Back to blog`} />
          </div>
        </Container>
      </section>
    </PublicLayout>
  )
}

export default PostPage
