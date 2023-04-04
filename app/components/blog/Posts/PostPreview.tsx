import Link from 'next/link'
import React from 'react'
import { BlogPost } from 'types'

import ButtonLink from '@/components/common/ButtonLink'

type Props = {
  post: BlogPost
}

const PostPreview = ({ post }: Props) => {
  return (
    <article>
      <div className="my-6">
        <div className="pt-3 space-x-2 text-xs text-gray-600">
          <span>{post.date}</span>
        </div>
        <h2 className="py-2 text-3xl text-gray-800 font-semibold leading-snug">
          <Link href={`/blog/posts/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="text-gray-700">{post.description}</p>
        <ButtonLink url={`/blog/posts/${post.slug}`} label={'Read more...'} />
      </div>
    </article>
  )
}

export default PostPreview
