import type { ComponentMeta } from '@storybook/react'

import HenhousePage from './HenhousePage'

export const generated = () => {
  return <HenhousePage />
}

export default {
  title: 'Pages/HenhousePage',
  component: HenhousePage,
} as ComponentMeta<typeof HenhousePage>
