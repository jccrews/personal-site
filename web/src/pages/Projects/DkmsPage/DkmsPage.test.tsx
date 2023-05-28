import { render } from '@redwoodjs/testing/web'

import DkmsPage from './DkmsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DkmsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DkmsPage />)
    }).not.toThrow()
  })
})
