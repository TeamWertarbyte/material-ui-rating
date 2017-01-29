import React from 'react'
import { action, storiesOf } from '@kadira/storybook'
import { Rating } from '../src'
import { themed } from './storyUtil'
import { colors } from 'material-ui/styles'
import { ContentAddCircle, ContentAddCircleOutline, ContentRemove } from 'material-ui/svg-icons'

const styles = {
  smallIcon: {
    width: 36,
    height: 36
  },
  mediumIcon: {
    width: 48,
    height: 48
  },
  largeIcon: {
    width: 60,
    height: 60
  },
  small: {
    width: 72,
    height: 72,
    padding: 16
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24
  },
  large: {
    width: 120,
    height: 120,
    padding: 30
  }
}

storiesOf('Rating', module)
  .add('Normal', () => themed(
    <Rating
      onRate={action('onRate')}
      value={3}
      max={5}
      onChange={action('onChange')}
    />
  ))
  .add('ReadOnly', () => themed(
    <Rating
      onRate={action('onRate')}
      value={3}
      max={5}
      onChange={action('onChange')}
      readOnly
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
  .add('Custom Sizes', () => themed(
    <div>
      <Rating
        onRate={action('onRate')}
        value={3}
        max={5}
        onChange={action('onChange')}
        itemStyle={styles.small}
        itemIconStyle={styles.smallIcon}
      />
      <Rating
        onRate={action('onRate')}
        value={3}
        max={5}
        onChange={action('onChange')}
        itemStyle={styles.medium}
        itemIconStyle={styles.mediumIcon}
      />
      <Rating
        onRate={action('onRate')}
        value={3}
        max={5}
        onChange={action('onChange')}
        itemStyle={styles.large}
        itemIconStyle={styles.largeIcon}
      />
    </div>
  ))
