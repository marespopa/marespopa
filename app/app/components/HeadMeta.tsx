'use client'
import Head from 'next/head'

interface Props {
  title: string
}

function HeadMeta({ title }: Props) {
  const description = `I'm a frontend engineer with in-depth experience in UI/UX development. In a nutshell, I create websites and web applications that help organizations address business challenges and meet their needs.`

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default HeadMeta
