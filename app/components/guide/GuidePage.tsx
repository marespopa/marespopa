import dynamic from 'next/dynamic'
import Link from 'next/link'
import React from 'react'

import Container from '../container/Container'

const GuideForm = dynamic(() => import('./GuideForm'), {
  loading: () => <p>Loading form...</p>,
})

const ReviewPage = () => {
  return (
    <Container>
      <div className="prose prose-invert my-4 mt-8 mx-auto">
        <section>
          <h1>The Perfect Website Recipe</h1>

          <h2>
            A Comprehensive Guide to Optimizing Website Loading Speed in 2024 🚀
          </h2>

          <p>
            Are you experiencing high abandonment rates due to slow website
            loading times? This ebook provides detailed optimization techniques
            and services to refine your website for faster loading times, better
            user experience, and improved search engine ranking.
          </p>

          <p>
            Learn how to produce more successful websites now and in the future!
          </p>
        </section>

        <section className="mb-8">
          <h3>
            <Link
              href={'/pdf/website-recipe-2024.pdf'}
              rel="noopener noreferrer"
              target="_blank"
            >
              Click here to download the guide
            </Link>
          </h3>

          <p>You&apos;ve taken the first step toward improving your website.</p>
          <p className="italic">
            Best regards, <br />
            Mares
          </p>
        </section>
      </div>
    </Container>
  )
}

export default ReviewPage
