import Link from 'next/link'
import React from 'react'
import { BlogPost } from 'types'

import ErrorPage from '../common/ErrorPage'
import Container from '../container/Container'
import PublicLayout from '../layouts/PublicLayout'
import PostPreview from './Posts/PostPreview'

type Props = {
  posts: BlogPost[]
}

const BlogPage = ({ posts }: Props) => {
  const hasPosts = posts && posts.length

  if (!hasPosts) {
    return <ErrorPage statusCode={500} />
  }

  const postsList = posts.map((post) => {
    return <PostPreview key={post.slug} post={post} />
  })

  return (
    <PublicLayout>
      <section>
        <Container>
          <div className="mb-16">
            <section className="p-4 bg-fuchsia-800 rounded shadow-sm my-8">
              Thoughts about my experience through the software world.
            </section>
            <section className="grid grid-cols-1 gap-y-4 max-w-xl">
              {postsList}
            </section>
          </div>
        </Container>
      </section>
    </PublicLayout>
  )
}

export default BlogPage
