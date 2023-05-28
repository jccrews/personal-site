import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ProjectsWordificationPage = () => {
  return (
    <>
      <MetaTags title="Wordification" description="Wordification page" />

      <h1>WordificationPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/WordificationPage/WordificationPage.tsx</code>
      </p>
      <p>
        My default route is named <code>wordification</code>, link to me with `
        <Link to={routes.wordification()}>Wordification</Link>`
      </p>
    </>
  )
}

export default ProjectsWordificationPage
