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
const green = require('material-ui/colors/green').default;
const red = require('material-ui/colors/red').default;
    <Rating
      onRate={() => console.log('onRate')}
      value={3}
      max={5}
      onChange={() => console.log('onChange')}
      iconFilled={<AddCircle nativeColor={green[500]} />}
      iconHovered={<AddCircleOutline nativeColor={green[500]} />}
      iconNormal={<Remove nativeColor={red[300]} />}
    />
```
Custom Sizes:
```
const { withStyles } = require('material-ui/styles');
const smallStyles = {
  iconButton: {
    width: 72,
    height: 72,
    padding: 16
  },
  icon: {
    width: 36,
    height: 36
  }
};
const mediumStyles = {
  iconButton: {
    width: 96,
    height: 96,
    padding: 24
  },
  icon: {
    width: 48,
    height: 48
  }
};
const largeStyles = {
  iconButton: {
    width: 120,
    height: 120,
    padding: 30
  },
  icon: {
    width: 60,
    height: 60
  }
};
const MyRating = ({classes}) => (
  <Rating
    onRate={() => console.log('onRate')}
    value={3}
    max={5}
    onChange={() => console.log('onChange')}
    classes={classes}
  />
);
const SmallRating = withStyles(smallStyles)(MyRating);
const MediumRating = withStyles(mediumStyles)(MyRating);
const LargeRating = withStyles(largeStyles)(MyRating);
    <div>
      <SmallRating />
      <MediumRating />
      <LargeRating />
    </div>
```
Dynamic:
```
const { AddCircle, AddCircleOutline, Remove } = require('material-ui-icons');
const { withStyles } = require('material-ui/styles');
const green = require('material-ui/colors/green').default;
const styles = {
  icon: {
    color: green[300]
  }
};
const MyRating = ({classes}) => (
  <Rating
    onRate={() => console.log('onRate')}
    value={3}
    max={5}
    onChange={() => console.log('onChange')}
    iconFilledRenderer={({index}) => <AddCircle nativeColor={green[500]} />}
    iconHoveredRenderer={({index}) => <span className={classes.icon}>{index}</span>}
    iconNormalRenderer={({index}) => <AddCircleOutline nativeColor={green[500]} />}
    classes={classes}
  />
);
const MyRatingWithStyles = withStyles(styles)(MyRating);
    <MyRatingWithStyles/>
```
