import React from 'react'

import Container from '../container/Container'
import HeroText from './HeroText'

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-white to-indigo-200">
      <Container>
        <HeroText />
      </Container>
    </section>
  )
}

export default Hero
