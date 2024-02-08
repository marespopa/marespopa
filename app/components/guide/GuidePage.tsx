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
            Are you looking for ways to improve your existing website? <br />
            This ebook provides easy to apply optimization techniques and
            practices to refine your website for faster loading times, better
            user experience, and improved search engine ranking.
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
            All the best, <br />
            Mares
          </p>
        </section>
      </div>
    </Container>
  )
}

export default ReviewPage
