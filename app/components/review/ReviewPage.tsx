import React from 'react'

import Container from '../container/Container'
import ReviewForm from './ReviewForm'

const ReviewPage = () => {
  return (
    <Container>
      <div className="prose prose-invert my-4 mt-8 mx-auto">
        <section>
          <h1>Greetings, Ambitious Business Owner! 👋</h1>

          <h2>Interested in getting a free review for your own website?</h2>
          <h3>Here is how the process will look like:</h3>
          <ol className="marker:text-yellow-300">
            <li>
              <span className="font-bold">🌐 Submit Your Website: </span> Share
              your site link, and I&apos;ll dive into it.
            </li>
            <li>
              <span className="font-bold">⏳ Swift Turnaround:</span> I&apos;ll
              analyze every part of it, including design, content,
              responsiveness, performance, within 1-3 business days.
            </li>
            <li>
              <span className="font-bold">📧 Receive Expert Insights:</span> Get
              an email detailing suggestions, pros, and cons straight to your
              inbox.
            </li>
          </ol>

          <h2>Why would I send you my website?</h2>
          <ul className="marker:text-yellow-300">
            <li>
              <span className="font-bold">🔍 Tailored Analysis:</span> A
              personalized evaluation that aligns with your unique business
              goals.
            </li>
            <li>
              <span className="font-bold">📈 Actionable Recommendations:</span>{' '}
              Clear, implementable suggestions to enhance your site&apos;s
              performance.
            </li>
            <li>
              <span className="font-bold">💰 Zero Cost, No Catch:</span>{' '}
              It&apos;s free – no risk, just valuable insights to boost your
              online presence.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>All right. Let&apos;s do this!</h2>
          <p>
            Ready to transform your website? Take the first step toward success!
            Fill out the form below to get your{' '}
            <span className="font-bold">FREE</span> website review:
          </p>
          <ReviewForm />
        </section>
      </div>
    </Container>
  )
}

export default ReviewPage
