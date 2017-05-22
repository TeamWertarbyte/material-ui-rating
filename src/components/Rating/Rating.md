Normal:
```
    <Rating
      onRate={() => console.log('onRate')}
      value={3}
      max={5}
      onChange={() => console.log('onChange')}
    />
```
Read Only:
```
       <Rating
          onRate={() => console.log('onRate')}
          value={3}
          max={5}
          onChange={() => console.log('onChange')}
          readOnly
        />
```
Disabled:
```
       <Rating
          onRate={() => console.log('onRate')}
          value={3}
          max={5}
          onChange={() => console.log('onChange')}
          disabled
        />
```
Custom Icons:
```
const { ContentAddCircle, ContentAddCircleOutline, ContentRemove } = require('material-ui/svg-icons');
const { colors } = require('material-ui/styles');
    <Rating
      onRate={() => console.log('onRate')}
      value={3}
      max={5}
      onChange={() => console.log('onChange')}
      iconFilled={<ContentAddCircle color={colors.green500} />}
      iconHovered={<ContentAddCircleOutline color={colors.green500} />}
      iconNormal={<ContentRemove color={colors.red300} />}
    />
```
Custom Sizes:
```
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
};
    <div>
      <Rating
        onRate={() => console.log('onRate')}
        value={3}
        max={5}
        onChange={() => console.log('onChange')}
        itemStyle={styles.small}
        itemIconStyle={styles.smallIcon}
      />
      <Rating
        onRate={() => console.log('onRate')}
        value={3}
        max={5}
        onChange={() => console.log('onChange')}
        itemStyle={styles.medium}
        itemIconStyle={styles.mediumIcon}
      />
      <Rating
        onRate={() => console.log('onRate')}
        value={3}
        max={5}
        onChange={() => console.log('onChange')}
        itemStyle={styles.large}
        itemIconStyle={styles.largeIcon}
      />
    </div>
```
Dynamic:
```
const { ContentAddCircle, ContentAddCircleOutline, ContentRemove } = require('material-ui/svg-icons');
const { colors } = require('material-ui/styles');
const { FontIcon } = require('material-ui');
      <Rating
        onRate={() => console.log('onRate')}
        value={3}
        max={5}
        onChange={() => console.log('onChange')}
        itemIconStyle={{color : colors.green300}}
        iconFilledRenderer={({index}) => <ContentAddCircle color={colors.green500} />}
        iconHoveredRenderer={({index}) => <FontIcon >{index}</FontIcon>}
        iconNormalRenderer={({index}) => <ContentAddCircleOutline color={colors.green500} />}
        tooltipRenderer={({index}) => <span>{index}</span>}
        tooltipPosition='bottom-center'
      />
```