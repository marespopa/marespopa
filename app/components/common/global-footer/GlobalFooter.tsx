import Link from 'next/link'
import React, { useEffect, useMemo, useState } from 'react'

import Container from '../../container/Container'
import ContentLink from '../ContentLink'

const GlobalFooter = () => {
  const LIST_OF_PHRASES = useMemo(
    () => [
      'Keeping it simple and effective.',
      'UI/UX crafted with passion.',
      'Bringing ideas to life visually.',
      'Crafting the perfect user journey.',
      'Bridging design and engineering.',
      'Making web experiences delightful.',
      'Mastering web technologies with creativity.',
    ],
    [],
  )

  const [catchPhrase, setCatchPhrase] = useState<string>('')

  useEffect(() => {
    setCatchPhrase(
      LIST_OF_PHRASES[Math.floor(Math.random() * LIST_OF_PHRASES.length)],
    )
  }, [LIST_OF_PHRASES])

  return (
    <footer className="pt-10 pb-20 bg-gray-950">
      <Container>
        <section className="text-gray-200">
          <p className="text-2xl mt-4 text-center sm:text-left">
            {catchPhrase}
          </p>
          <div className="my-4 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="mt-4 md:mt-0">
              Designed & built by{' '}
              <ContentLink
                url="https://github.com/marespopa?tab=repositories"
                label="Mares Popa"
                title="Github Repo"
                target="_blank"
              />
            </p>
            <nav className="my-4">
              <ul className="flex items-center flex-col md:flex-row gap:10">
                <li className={footerLinkStyle}>
                  <Link href="#">Back to top</Link>
                </li>
                <li className={footerLinkStyle}>
                  <Link href="mailto:hello@marespopa.com">Contact me</Link>
                </li>
                <li className={footerLinkStyle}>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </Container>
    </footer>
  )
}

const footerLinkStyle =
  'p-4 md:px-2 text-gray-200 hover:text-white focus:text-white hover:underline focus:underline'

export default GlobalFooter
