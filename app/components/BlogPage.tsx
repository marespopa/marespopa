import React from 'react'

import Container from './container/Container'
import PublicLayout from './layouts/PublicLayout'

type Props = {}

const BlogPage = (props: Props) => {
  return (
    <PublicLayout>
      <section className="bg-gradient-to-br from-slate-50 to-gray-100">
        <Container>
          <div className="py-10 prose">
            <article>
              <span className="text-sm text-gray-500">31 March 2023</span>
              <h1>Tips for newcomers </h1>
              <h2>
                As someone who has been working in the IT industry for several
                years now, I know how overwhelming it can be for newcomers to
                get started.
              </h2>
              <p>
                When I began my journey as a professional frontend engineer back
                in 2015, I had to learn a lot on the job and constantly keep up
                with the latest technologies and methodologies.
              </p>
              <p>
                Through my experiences at various companies like Cognizant
                Softvision, 3Pillar Global, and Frequentis, I have gained
                valuable insights that I wish I had known when I first started
                out. One of the most important things I have learned is the
                importance of collaboration and communication with your team.
                Working together towards a common goal is key to delivering
                successful projects.
              </p>
              <p>
                Another tip I would give to newcomers is to never stop learning.
                The IT industry is constantly evolving, and it's important to
                stay up to date with the latest trends and technologies. Attend
                conferences, read industry publications, and take courses to
                enhance your skills and knowledge.
              </p>
              <p>
                Finally, I have found that being passionate and curious about
                your work can make all the difference. Take ownership of your
                projects and be proactive in seeking out new opportunities to
                grow and develop your skills.
              </p>
              <p>
                With these tips in mind, I hope that newcomers to the IT
                industry can feel more confident and prepared to tackle the
                challenges ahead. Remember to stay humble, keep learning, and
                enjoy the journey!
              </p>
            </article>
          </div>
        </Container>
      </section>
    </PublicLayout>
  )
}

export default BlogPage
