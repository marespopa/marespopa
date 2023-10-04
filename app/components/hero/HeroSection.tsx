import React from 'react'

import ButtonLink from '../common/ButtonLink'
import EmphasisedWord from '../common/EmphasisedWord'

const HeroSection = () => {
  return (
    <section aria-label="Hero" className="pt-16">
      <h3 className="text-xl">Hello and welcome!</h3>
      <h1 className="mt-2 text-6xl font-bold">I&apos;m Mares</h1>
      <h2 className="text-3xl font-bold text-blue-300 mt-4 leading-relaxed">
        Writing code & spreading knowledge
      </h2>
      <p className="mt-16 text-2xl max-w-prose">
        Been a software engineer since 2015, mostly focused on frontend. Along
        the way I&apos;ve had the privilege of working on exciting projects and
        help bring design visions to life.
      </p>
      <p className="mt-4 text-2xl max-w-prose">
        Beyond coding, I&apos;m deeply committed to spreading knowledge. As an
        online teacher, I&apos;m dedicated to inspiring minds and fostering a
        love for technology.
      </p>
      <div className="mt-8">
        <ButtonLink
          url="https://www.redbubble.com/people/smoothwizz/shop?artistUserName=smoothwizz&asc=u&collections=2753319&iaCode=all-departments&sortOrder=relevant"
          label="Check out my coding-inspired designs on Redbubble."
        />
      </div>
    </section>
  )
}

export default HeroSection
