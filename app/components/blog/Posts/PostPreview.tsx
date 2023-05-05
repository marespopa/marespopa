import Link from 'next/link'
import React from 'react'
import { BlogPost } from 'types'

import ReadMoreLink from '@/components/common/ReadMoreLink'

type Props = {
  post: BlogPost
}

const PostPreview = ({ post }: Props) => {
  return (
    <article>
      <div className="my-6">
        <div className="pt-3 space-x-2 text-xs text-gray-200">
          <span>{post.date}</span>
        </div>
        <h2 className="py-2 text-3xl text-white font-semibold leading-snug">
          <Link href={`/blog/posts/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="text-gray-200">{post.description}</p>
        <ReadMoreLink url={`/blog/posts/${post.slug}`} label={'Read more...'} />
      </div>
    </article>
  )
}

export default PostPreview
