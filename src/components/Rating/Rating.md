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
const { AddCircle, AddCircleOutline, Remove } = require('material-ui-icons');
const green = require('material-ui/colors/green');
const red = require('material-ui/colors/red');
    <Rating
      onRate={() => console.log('onRate')}
      value={3}
      max={5}
      onChange={() => console.log('onChange')}
      iconFilled={<AddCircle color={green[500]} />}
      iconHovered={<AddCircleOutline color={green[500]} />}
      iconNormal={<Remove color={red[300]} />}
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
const { AddCircle, AddCircleOutline, Remove } = require('material-ui-icons');
const green = require('material-ui/colors/green');
      <Rating
        onRate={() => console.log('onRate')}
        value={3}
        max={5}
        onChange={() => console.log('onChange')}
        itemIconStyle={{color : green[300]}}
        iconFilledRenderer={({index}) => <AddCircle color={green[500]} />}
        iconNormalRenderer={({index}) => <AddCircleOutline color={green[500]} />}
        tooltipRenderer={({index}) => <span>{index}</span>}
        tooltipPosition='bottom-center'
      />
```
