import type { ComponentMeta } from '@storybook/react'

import PersonalProjectsPage from './PersonalProjectsPage'

export const generated = () => {
  return <PersonalProjectsPage />
}

export default {
  title: 'Pages/PersonalProjectsPage',
  component: PersonalProjectsPage,
} as ComponentMeta<typeof PersonalProjectsPage>
