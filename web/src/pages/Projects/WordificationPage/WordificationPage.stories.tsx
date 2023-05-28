import type { ComponentMeta } from '@storybook/react'

import WordificationPage from './WordificationPage'

export const generated = () => {
  return <WordificationPage />
}

export default {
  title: 'Pages/WordificationPage',
  component: WordificationPage,
} as ComponentMeta<typeof WordificationPage>
