import React from 'react'
import { action, storiesOf } from '@kadira/storybook'
import { Rating } from '../src'
import { themed } from './storyUtil'
import { colors } from 'material-ui/styles'
import { ContentAddCircle, ContentAddCircleOutline, ContentRemove } from 'material-ui/svg-icons'


storiesOf('Rating', module)
  .add('Normal', () => themed(
    <Rating
      onRate={action('onRate')}
      value={3}
      max={5}
      onChange={action('onChange')}
    />
  ))
  .add('Disabled', () => themed(
    <Rating
      onRate={action('onRate')}
      value={3}
      max={5}
      onChange={action('onChange')}
      disabled
    />
  ))
  .add('Custom Icons', () => themed(
    <Rating
      onRate={action('onRate')}
      value={3}
      max={5}
      onChange={action('onChange')}
      iconFilled={<ContentAddCircle color={colors.green500}/>}
      iconHovered={<ContentAddCircleOutline color={colors.green500}/>}
      iconNormal={<ContentRemove color={colors.red300}/>}
    />
  ))
