import { render } from '@redwoodjs/testing/web'

import WhatsThatPlantPage from './WhatsThatPlantPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('WhatsThatPlantPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WhatsThatPlantPage />)
    }).not.toThrow()
  })
})
