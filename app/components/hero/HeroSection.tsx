import React from 'react'

import ButtonLink from '../common/ButtonLink'
import EmphasisedWord from '../common/EmphasisedWord'

const HeroSection = () => {
  return (
    <section aria-label="Hero" className="pt-16">
      <h3 className="text-xl">Hey there, my name is</h3>
      <h1 className="mt-2 text-6xl font-bold">Mares Popa</h1>
      <h2 className="text-3xl font-bold text-blue-300 mt-4 leading-relaxed">
        Writing code that makes design come to life.
      </h2>
      <p className="mt-16 text-2xl max-w-prose">
        I&apos;m passionate about building exceptional web experiences. With
        expertise in{' '}
        <EmphasisedWord>
          HTML/CSS, JavaScript, React.js, and Next.js
        </EmphasisedWord>
        , I specialize in frontend development. I enjoy collaborating with
        teams, bringing ideas to life, and creating user-friendly solutions.
      </p>
      <div className="mt-8">
        <ButtonLink
          url="https://www.redbubble.com/people/smoothwizz/shop?artistUserName=smoothwizz&asc=u&collections=2753319&iaCode=all-departments&sortOrder=relevant"
          label="Check my programmer swag collection!"
        />
      </div>
    </section>
  )
}

export default HeroSection
