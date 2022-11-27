import React from 'react'

const Landing = () => {
  return (
    <section className="my-5">
      <div className="text-center bg-gray-50 text-gray-800 py-20 px-6">
        <h1 className="text-5xl font-bold mt-0 mb-6"> Coming Soon</h1>

        <p className="my-10 mx-auto text-3xl">
          Mark your calendars! The new site will drop on{' '}
          <span className="font-bold">December 16th.</span> <br />
          {`Can't wait
          until then to reach me? Contact me below and I'll get back to you as soon as I can.`}
        </p>

        <a
          className="inline-block px-6 py-2.5 bg-indigo-600 text-white font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          href="mailto:hello@marespopa.com"
          role="button"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}

export default Landing
