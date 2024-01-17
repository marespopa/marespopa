import SVGGithub from '../icons/SVGGithub'
import SVGLink from '../icons/SVGLink'
import { ProjectItem } from './constants'

interface Props extends ProjectItem {}

const ProjectEntry = ({
  image,
  title,
  description,
  appLink,
  githubLink,
}: Props) => {
  return (
    <div className="mt-8 flex flex-col md:flex-row">
      <div className="hidden md:flex mt-8 md:mt-0">{image}</div>
      <div className="flex-1 md:pl-8">
        <h3 className="ml-auto text-xl text-blue-300">Featured project</h3>
        <h2 className="ml-auto text-2xl">
          <a
            className="hover:underline focus:underline"
            href={appLink}
            target="_blank"
            rel="noreferrer noopener"
          >
            {title}
          </a>
        </h2>
        <article>
          <p className="max-w-prose mt-8 p-4 bg-sky-900 rounded shadow-sm md:-ml-20 md:text-right">
            {description}
          </p>
        </article>
        <div className="flex gap-4 md:justify-end items-center mt-8 text-2xl">
          <a
            className="hover:text-blue-300 focus:text-blue-300"
            aria-label="App Link"
            href={appLink}
            target="_blank"
            rel="noreferrer noopener"
          >
            <SVGLink />
          </a>
          <a
            className="hover:text-blue-300 focus:text-blue-300"
            aria-label="Github Link"
            href={githubLink}
            target="_blank"
            rel="noreferrer noopener"
          >
            <SVGGithub />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectEntry
