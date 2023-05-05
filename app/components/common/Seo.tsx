import Head from 'next/head'
import { useRouter } from 'next/router'

// !STARTERCONF Change these default meta
const defaultMeta = {
  title: 'Mares Popa - Frontend Engineer',
  siteName: 'Mares Popa - Frontend Engineer',
  description: `Hi, I’m Mares! I'm a frontend engineer with in-depth experience in UI/UX development.
                In a nutshell, I create websites and web applications that help organizations address
                business challenges and meet their needs. My expertise lies within front-end web apps,
                and I've been working with a lot of frameworks and languages, including Next.JS,
                Typescript, React, AngularJS, Sass, Tailwind CSS and many others.`,
  url: 'https://marespopa.com',
  type: 'website',
  robots: 'follow, index',
}

type SeoProps = {
  date?: string
  templateTitle?: string
} & Partial<typeof defaultMeta>

export default function Seo(props: SeoProps) {
  const router = useRouter()
  const meta = {
    ...defaultMeta,
    ...props,
  }
  meta['title'] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content={meta.robots} />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${meta.url}${router.asPath}`} />
      <link rel="canonical" href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@smoothwizz" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      {meta.date && (
        <>
          <meta property="article:published_time" content={meta.date} />
          <meta
            name="publish_date"
            property="og:publish_date"
            content={meta.date}
          />
          <meta name="author" property="article:author" content="Mares Popa" />
        </>
      )}

      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name="msapplication-TileColor" content="#172554" />
      <meta name="theme-color" content="#172554" />
    </Head>
  )
}

const favicons: Array<React.ComponentPropsWithoutRef<'link'>> = [
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon/favicon-16x16.png',
  },
  { rel: 'manifest', href: '/favicon/site.webmanifest' },
  {
    rel: 'mask-icon',
    href: '/favicon/safari-pinned-tab.svg',
    color: '#172554',
  },
  { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
]
