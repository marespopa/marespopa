import React from 'react'

import ButtonLink from '../common/ButtonLink'

const HeroSection = () => {
  return (
    <section aria-label="Hero" className="pt-16 font-mono">
      <h1 className="mt-2 text-5xl font-bold">
        Senior Software Engineer &
        <span className="text-sky-200"> Online Educator</span>
      </h1>

      <p className="mt-16 text-2xl max-w-prose">
        I design and develop digital products, including websites and apps, with
        a focus on UX principles.
      </p>
      <p className="mt-8 text-2xl max-w-prose">
        In addition to coding, I teach full-stack development online to help
        others enter the world of tech.
      </p>
      <div className="mt-16">
        <ButtonLink
          url="https://dolooper.netlify.app?ref=mp"
          label="Amplify your productivity with Dolooper."
        />
      </div>
    </section>
  )
}

export default HeroSection
