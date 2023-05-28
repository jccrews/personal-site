import { render } from '@redwoodjs/testing/web'

import PersonalProjectsPage from './PersonalProjectsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PersonalProjectsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PersonalProjectsPage />)
    }).not.toThrow()
  })
})
