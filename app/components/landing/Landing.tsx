import React from 'react'

const Landing = () => {
  const currentYear = new Date().getFullYear()
  const startingYear = 2015
  const yearsWorking = currentYear - startingYear

  return (
    <section className="my-5">
      <div className=" text-gray-800 py-20 px-6">
        <p className="mt-0 mb-3 mx-auto text-xl">Hi! My name is</p>

        <h1 className="text-5xl font-bold my-3">Mares Popa</h1>
        <h2 className="text-3xl font-bold mt-3 mb-6">
          <span className="text-blue-600">&</span> I build and develop web
          applications
        </h2>

        <p className="my-10 mx-auto text-xl">
          {`Started my journey ${yearsWorking} years ago as a professional frontend engineer.
           In these time I've been part of multiple projects and collaborated with talented people to create and mantain
           digital products for both business and consumer use. `}
        </p>
        <p className="my-10 mx-auto text-xl">
          {`I specialize in building web applications and my current
           toolset includes `}
          <span className="font-bold">
            {'Next.JS, React, Typescript, JavaScript, '}
          </span>
          {
            'and all the other various frameworks, libraries and technologies related to them. '
          }
        </p>
        <p className="my-4 mx-auto text-xl">
          {`I live in Romania, married to a wonderful wife and been alive since
          93'. Beside being obsessed with the web, I also enjoy cycling,
          basketball and visiting new cities.`}
        </p>
        <p className="my-4 mx-auto text-md">
          <br />
          {`Have an interesting proposal? Contact me below and I'll get back to you as soon as I can.`}
        </p>

        <a
          className="inline-block px-6 py-2.5 bg-blue-700 text-white font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-blue-900 hover:shadow-lg focus:bg-blue-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
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
