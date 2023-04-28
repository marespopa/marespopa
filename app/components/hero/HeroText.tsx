import React from 'react'

type Props = {}

const HeroText = (props: Props) => {
  return (
    <article className="pt-20 pb-10">
      <p className="mt-0 mb-3 mx-auto text-xl">Hi! My name is</p>
      <h1 className="text-5xl font-bold my-3 text-gray-900">Mares Popa</h1>
      <h2 className="text-3xl font-bold mt-3 mb-6 text-gray-900">
        <span className="text-blue-600">&</span> I build digital products
      </h2>
      <p className={`${paragraphStyle}`}>
        I&apos;m a frontend engineer with a passion for crafting digital
        products that deliver exceptional user experiences. With a focus on
        building web applications, I specialize in leveraging the latest tools
        and technologies to create top-notch solutions that cater to both
        business and consumer needs.
      </p>
      <p className={`${paragraphStyle} ml-auto`}>
        I specialize in building web applications and my current tech-stack
        includes {` `}
        <span className="font-bold">
          {'Next.JS, React, Typescript, JavaScript, '}
        </span>
        and all the other various frameworks, libraries and technologies related
        to them.
      </p>
      <p className={paragraphStyle}>
        When I&apos;m not obsessing over the web, you can find me enjoying my
        other passions, such as cycling, playing basketball, or exploring new
        cities with my wonderful wife.
      </p>
    </article>
  )
}

const paragraphStyle = 'my-10 ml-0 text-xl'

export default HeroText
