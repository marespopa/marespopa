import React from 'react'

import ButtonLink from '../common/ButtonLink'
import EmphasisedWord from '../common/EmphasisedWord'

const HeroSection = () => {
  return (
    <section aria-label="Hero" className="pt-16">
      <h3 className="text-xl">Hey there, my name is</h3>
      <h1 className="mt-2 text-6xl font-bold">Mares Popa</h1>
      <h2 className="text-5xl font-bold text-blue-300 mt-4 leading-tight">
        I&apos;m crafting digital apps that <br />
        <span className="border-b-8 border-blue-300 pb-1">make an impact</span>.
      </h2>
      <p className="mt-16 text-2xl max-w-prose">
        As a frontend engineer, my passion lies in crafting digital experiences
        that truly make an impact. With expertise in tools like{' '}
        <EmphasisedWord>Next.JS, React, and Typescript</EmphasisedWord>, I
        specialize in building custom web applications that focus on delivering
        exceptional user experiences.
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
