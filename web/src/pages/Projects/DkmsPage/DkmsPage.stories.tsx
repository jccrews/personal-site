import type { ComponentMeta } from '@storybook/react'

import DkmsPage from './DkmsPage'

export const generated = () => {
  return <DkmsPage />
}

export default {
  title: 'Pages/DkmsPage',
  component: DkmsPage,
} as ComponentMeta<typeof DkmsPage>
