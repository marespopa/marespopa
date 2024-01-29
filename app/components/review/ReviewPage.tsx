import React from 'react'

import ContactForm from '../contact/ContactForm'
import Container from '../container/Container'
import ReviewForm from './ReviewForm'

const ReviewPage = () => {
  return (
    <Container>
      <div className="prose prose-invert my-4 mt-8">
        <section>
          <h1>One Free Website Review just for You</h1>
          <h2>Greetings, Ambitious Business Owner! 👋</h2>
          <p>
            I&apos;m Mares, and I&apos; been building and developing websites
            and web application for almost a decade, and I&apos;m more than
            happy to offer you a FREE website review.
          </p>
          <h2>The Process</h2>
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
