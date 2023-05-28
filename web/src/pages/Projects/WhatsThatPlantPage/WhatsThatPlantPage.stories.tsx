import type { ComponentMeta } from '@storybook/react'

import WhatsThatPlantPage from './WhatsThatPlantPage'

export const generated = () => {
  return <WhatsThatPlantPage />
}

export default {
  title: 'Pages/WhatsThatPlantPage',
  component: WhatsThatPlantPage,
} as ComponentMeta<typeof WhatsThatPlantPage>
