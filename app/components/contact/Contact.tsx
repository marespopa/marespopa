import React from 'react'

import Container from '../container/Container'

const Contact = () => {
  return (
    <section className="my-4 py-10 bg-white">
      <Container>
        <h4 className="mb-8 text-5xl font-bold text-center md:text-left">
          Contact
        </h4>
        <p className="mx-auto text-lg text-gray-800">
          {`Have an interesting proposal? Contact me below and I'll get back to you as soon as I can.`}
        </p>

        <a
          className={buttonStyle}
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          href="mailto:hello@marespopa.com"
          role="button"
        >
          Send an email
        </a>
      </Container>
    </section>
  )
}

const buttonStyle = `inline-block px-6 my-4 py-2.5 bg-blue-700
                    text-white font-medium text-xl leading-tight
                    rounded shadow-md hover:bg-blue-900 hover:shadow-lg
                    focus:bg-blue-900 focus:shadow-lg focus:outline-none
                    focus:ring-0 active:bg-blue-800 active:shadow-lg transition
                    duration-150 ease-in-out`

export default Contact
