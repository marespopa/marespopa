import React from 'react'

import AboutSection from './about/AboutSection'
import ContactSection from './contact/ContactSection'
import Container from './container/Container'
import ExperienceSection from './experience/ExperienceSection'
import HeroSection from './hero/HeroSection'
import ProjectsSection from './projects/ProjectsSection'
import SkillsSection from './skills/SkillsSection'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <Container>
      <HeroSection />
      <AboutSection index={1} />
      <ProjectsSection index={2} />
      <SkillsSection index={3} />
      <ExperienceSection index={4} />
      <ContactSection index={5} />
    </Container>
  )
}

export default HomePage
