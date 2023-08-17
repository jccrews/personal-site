import { MetaTags } from '@redwoodjs/web'

import IntroAndResume from 'src/components/IntroAndResume/IntroAndResume'

const HomePage = () => {
  /**
   *
   * TODO: ADD QUICK LINKS ???
   */
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <IntroAndResume />
    </>
  )
}

export default HomePage
