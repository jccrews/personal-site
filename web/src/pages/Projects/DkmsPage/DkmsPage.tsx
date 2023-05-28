import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ProjectsDkmsPage = () => {
  return (
    <>
      <MetaTags title="Dkms" description="Dkms page" />

      <h1>DkmsPage</h1>
      <p>
        Find me in <code>./web/src/pages/DkmsPage/DkmsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>dkms</code>, link to me with `
        <Link to={routes.dkms()}>Dkms</Link>`
      </p>
    </>
  )
}

export default ProjectsDkmsPage
