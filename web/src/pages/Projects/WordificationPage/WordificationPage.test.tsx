import { render } from '@redwoodjs/testing/web'

import WordificationPage from './WordificationPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('WordificationPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WordificationPage />)
    }).not.toThrow()
  })
})
