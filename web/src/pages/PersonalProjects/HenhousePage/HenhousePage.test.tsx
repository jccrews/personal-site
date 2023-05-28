import { render } from '@redwoodjs/testing/web'

import HenhousePage from './HenhousePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HenhousePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HenhousePage />)
    }).not.toThrow()
  })
})
