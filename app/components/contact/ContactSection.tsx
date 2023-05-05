import React from 'react'

import ButtonLink from '../common/ButtonLink'
import ContentLink from '../common/ContentLink'
import { homeSectionStyle } from '../common/styles'
import WithAnimation from '../common/WithAnimation'

type Props = {
  index: number
}

const ContactSection = ({ index }: Props) => {
  return (
    <WithAnimation>
      <section className={`${homeSectionStyle} pb-20`} id="contact">
        <h2 className="text-4xl flex items-baseline">
          <span className="text-xl text-blue-300 mr-4">{`0${index}`}</span>
          <span>Let&apos;s Connect</span>
        </h2>
        <article className="max-w-prose leading-relaxed text-gray-200">
          <p className="mt-8">
            I&apos;m always open to meeting new people in the industry and
            sharing experiences. Whether you have a question, would like to chat
            about a potential collaboration, or just want to say hello, feel
            free to send me a message. You can reach me via email at{' '}
            <ContentLink
              url="mailto:hello@marespopa.com"
              title="Mares Popa Email"
              label="hello@marespopa.com"
              target="_blank"
            />{' '}
            or connect with me on{' '}
            <ContentLink
              url="https://www.linkedin.com/in/mares-popa/"
              title="Mares Popa LinkedIN"
              label="LinkedIn"
              isExternal={true}
              target="_blank"
            />
            . I&apos;m looking forward to hearing from you!
          </p>

          <div className="flex mt-4">
            <ButtonLink url="mailto:hello@marespopa.com" label="Say hello" />
          </div>
        </article>
      </section>
    </WithAnimation>
  )
}

export default ContactSection
