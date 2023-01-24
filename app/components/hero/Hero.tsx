import React from 'react'

import Container from '../container/Container'

const Hero = () => {
  const startingYear = 2015

  return (
    <section className="bg-gradient-to-br from-slate-50 to-gray-100">
      <Container>
        <div className="pt-20 pb-10">
          <p className="mt-0 mb-3 mx-auto text-xl">Hi! My name is</p>

          <h1 className="text-5xl font-bold my-3">Mares Popa</h1>
          <h2 className="text-3xl font-bold mt-3 mb-6">
            <span className="text-blue-600">&</span> I build and develop web
            applications
          </h2>

          <p className="my-10 mx-auto text-xl">
            {`Started my journey back in ${startingYear} as a professional frontend engineer.
           In these time I've been part of multiple projects and collaborated with talented people to create and maintain
           digital products for both business and consumer use. `}
          </p>
          <p className="my-10 mx-auto text-xl">
            {`I specialize in building web applications and my current
           tech-stack includes `}
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
        </div>
      </Container>
    </section>
  )
}

export default Hero
