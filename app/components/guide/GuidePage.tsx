import React from 'react'

import Container from '../container/Container'
import GuideForm from './GuideForm'

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
            loading times? This free expert guide provides detailed optimization
            techniques and services to refine your website for faster loading
            times, better user experience, and improved search engine ranking.
          </p>

          <p>
            Learn how to produce more successful websites now and in the future!
          </p>
        </section>

        <section className="mb-8">
          <p>
            Simply provide your email address in the form below to gain{' '}
            <span className="font-bold">FREE</span> access to the file.
          </p>
          <p>
            Don&apos;t worry, we won&apos;t send any spam or marketing messages
            your way.
          </p>
          <GuideForm />
        </section>
      </div>
    </Container>
  )
}

export default ReviewPage
