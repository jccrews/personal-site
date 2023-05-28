import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const PersonalProjectsPage = () => {
  return (
    <>
      <MetaTags title="PersonalProjects" description="PersonalProjects page" />

      <h1>PersonalProjectsPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/PersonalProjectsPage/PersonalProjectsPage.tsx
        </code>
      </p>
      <p>
        My default route is named <code>personalProjects</code>, link to me with
        `<Link to={routes.personalProjects()}>PersonalProjects</Link>`
      </p>
    </>
  )
}

export default PersonalProjectsPage
