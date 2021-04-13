import React, { FC } from 'react'
import { linkTo } from '@storybook/addon-links'
import { Welcome } from '@storybook/react/demo'

export default { title: 'Welcome' }

export const toStorybook: FC = () => <Welcome showApp={linkTo('Button')} />
