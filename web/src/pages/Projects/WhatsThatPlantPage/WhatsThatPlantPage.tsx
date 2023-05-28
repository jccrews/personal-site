import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const WhatsThatPlantPage = () => {
  return (
    <>
      <MetaTags title="WhatsThatPlant" description="WhatsThatPlant page" />

      <h1>WhatsThatPlantPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/WhatsThatPlantPage/WhatsThatPlantPage.tsx</code>
      </p>
      <p>
        My default route is named <code>whatsThatPlant</code>, link to me with `
        <Link to={routes.whatsThatPlant()}>WhatsThatPlant</Link>`
      </p>
    </>
  )
}

export default WhatsThatPlantPage
