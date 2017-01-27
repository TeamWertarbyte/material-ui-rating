import React from 'react'
import { action, storiesOf } from '@kadira/storybook'
import { Rating } from '../src'
import { themed } from './storyUtil'


storiesOf('Rating', module)
  .add('Normal', () => themed(
    <Rating
      onRate={action('onRate')}
      value={3}
      max={5}
      onChange={action('onChange')}
    />
  ))
