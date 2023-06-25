import DolooperImage from '../images/DolooperImage'
import HermesMDImage from '../images/HermesMDImage'

export type ProjectItem = {
  id: number
  image: JSX.Element
  title: string
  description: string
  appLink: string
  githubLink: string
}

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 1,
    image: <DolooperImage />,
    title: 'Dolooper',
    description: `Dolooper is a productivity app built with NextJS and Tailwind CSS,
    allowing users to stay focused on one task at a time. With
    enhanced security, all data is stored locally for privacy and
    peace of mind.`,
    appLink: 'https://dolooper.netlify.app',
    githubLink: 'https://github.com/smoothwizz/doloper',
  },
  {
    id: 2,
    image: <HermesMDImage />,
    title: 'Hermes Notes',
    description: `Hermes Notes is a NextJS app designed to provide a seamless and
    efficient solution for creating Markdown files and exporting them
    to PDF format, catering specifically to the needs of users who
    frequently work with Markdown.`,
    appLink: 'https://hermesmd.netlify.app/',
    githubLink: 'https://github.com/smoothwizz/hermesnote',
  },
]
