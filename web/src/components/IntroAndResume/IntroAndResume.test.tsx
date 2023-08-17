import { render } from '@redwoodjs/testing/web'

import IntroAndResume from './IntroAndResume'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('IntroAndResume', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IntroAndResume />)
    }).not.toThrow()
  })
})
