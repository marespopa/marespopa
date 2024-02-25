import dynamic from 'next/dynamic'
import Link from 'next/link'
import React from 'react'

import Button from '../common/Button'
import Container from '../container/Container'

const GuideForm = dynamic(() => import('./GuideForm'), {
  loading: () => <p>Loading form...</p>,
})

const ReviewPage = () => {
  return (
    <Container>
      <div className="prose prose-invert mt-8 mx-auto">
        <section>
          <h1>The Perfect Website Recipe</h1>

          <h2>
            A Comprehensive Guide to Optimizing Website Loading Speed in 2024 🚀
          </h2>

          <p>
            Are you ready to take your website to the next level? <br />
            In today&apos;s fast-paced digital world, website speed can make or
            break user experience and search engine rankings. But fear not! This
            free ebook is here to equip you with the latest optimization
            techniques to improve your website&apos;s performance.
          </p>
          <ul>
            <li>
              ⚡ Easy-to-apply optimization techniques for lightning-fast
              loading times
            </li>
            <li>
              ⚙️ Practical tips to enhance accessibility and ensure the best
              experience for all users
            </li>
            <li>
              🔍 Proven strategies to boost search engine ranking and attract
              more visitors
            </li>
          </ul>

          <p>
            Click below to download your free copy and start transforming your
            website today:
          </p>
        </section>

        <section className="mt-4">
          <h3>
            <Link
              className="py-4 px-8 no-underline bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold rounded hover:transition-all duration-150"
              href={'/pdf/website-recipe-2024.pdf'}
              rel="noopener noreferrer"
              target="_blank"
            >
              Download now
            </Link>
          </h3>
          <p className="mt-16">
            You&apos;ve taken the first step toward a smoother, faster, and more
            successful online presence. Wishing you all the best on your
            optimization journey!
          </p>
          <p className="italic">
            Warm regards, <br />
            Mares
          </p>
        </section>
      </div>
    </Container>
  )
}

export default ReviewPage
