# Material Rating
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Build Status](https://travis-ci.org/TeamWertarbyte/material-ui-rating.svg?branch=master)](https://travis-ci.org/TeamWertarbyte/material-ui-rating)
[![Greenkeeper badge](https://badges.greenkeeper.io/TeamWertarbyte/material-ui-rating.svg)](https://greenkeeper.io/)

![Example](preview.gif)

## Installation

**Stable channel**
```sh
npm install material-ui-rating
```

**Pre-release channel**
```sh
npm install material-ui-rating@next
```

Please note that `@next` will only point to pre-releases; to get the latest stable release use `@latest` instead.

## Usage
```js
import { Rating } from 'material-ui-rating'

// ...
render() {
  return(
    <div>
        <Rating
          value={3}
          max={5}
          onChange={(value) => console.log(`Rated with value ${value}`)}
        />
    </div>
  )
}
```

### Material Rating Properties

|Name            |Type        |Default     |Description
|----------------|------------|------------|--------------------------------
|classes       | `object`  | | Sets classes for components.
|disabled        | `boolean`  | `false`    | Disables the rating and gray it out if set to true.
|iconFilled      | `node`     | `<ToggleStar color={colors.orange500}/>`    | This is the icon to be used as an icon in value range.
|iconFilledRenderer           | `func`   |            | Overrides filled icon renderer.
|iconHovered     | `node`     | `<ToggleStarBorder color={colors.orange500}/>`    | This is the icon to be used as an hovered icon.
|iconHoveredRenderer           | `func`   |            | Overrides hovered icon renderer.
|iconNormal      | `node`     | `<ToggleStarBorder color={colors.grey300}/>`    | This is the icon to be used as an normal icon.
|iconNormalRenderer           | `func`   |            | Overrides normal icon renderer.
|max             | `number`   | 5          | The max value of the rating bar.
|onChange       | `function` |            | Fired when a value is clicked.
|readOnly        | `boolean`  | `false`    | Don't allow input if set to true.
|value           | `number`   | 0          | The value of the rating bar.



\* required property


### CSS API

You can override all the class names injected by Material-UI-Rating thanks to the `classes` property. This property accepts the following keys:

- `root` - Applied to the root `div` element
- `iconButton` - Applied to the IconButton component
- `icon` - Applied to the SvgIcon component
- `disabled` - Applied to the IconButton component when disabled prop is `true`
- `readOnly` - Applied to the IconButton component when readOnly prop is `true`

## License

The files included in this repository are licensed under the MIT license.
