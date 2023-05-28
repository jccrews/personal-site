import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const PersonalProjectsHenhousePage = () => {
  return (
    <>
      <MetaTags title="Henhouse" description="Henhouse page" />

      <h1>HenhousePage</h1>
      <p>
        Find me in <code>./web/src/pages/HenhousePage/HenhousePage.tsx</code>
      </p>
      <p>
        My default route is named <code>henhouse</code>, link to me with `
        <Link to={routes.henhouse()}>Henhouse</Link>`
      </p>
    </>
  )
}

export default PersonalProjectsHenhousePage
