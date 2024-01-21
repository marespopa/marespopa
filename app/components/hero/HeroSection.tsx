import React from 'react'

import ButtonLink from '../common/ButtonLink'

const HeroSection = () => {
  return (
    <section aria-label="Hero" className="pt-16 font-mono">
      <h1 className="mt-2 text-5xl font-bold">
        Fullstack Developer &
        <span className="text-sky-200"> Online Educator</span>
      </h1>

      <p className="mt-16 text-2xl max-w-prose">
        I build and design digital products like websites and apps while using
        UX principles.
      </p>
      <p className="mt-8 text-2xl max-w-prose">
        Beyond coding, I&apos;m also an online teacher, passionate about walking
        my students into the world of full-stack development.
      </p>
      <div className="mt-16">
        <ButtonLink
          url="https://dolooper.netlify.app?ref=mp"
          label="Tired of juggling multiple tasks and losing focus on what's truly important? Try out Dolooper."
        />
      </div>
    </section>
  )
}

export default HeroSection
