// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof IntroAndResume> = (args) => {
//   return <IntroAndResume {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import IntroAndResume from './IntroAndResume'

export const generated = () => {
  return <IntroAndResume />
}

export default {
  title: 'Components/IntroAndResume',
  component: IntroAndResume,
} as ComponentMeta<typeof IntroAndResume>
