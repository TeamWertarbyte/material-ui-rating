# Material Rating [![Build Status](https://travis-ci.org/TeamWertarbyte/material-ui-rating.svg?branch=master)](https://travis-ci.org/TeamWertarbyte/material-ui-rating)

![Example](preview.gif)

See this component in [action](https://teamwertarbyte.github.io/material-ui-rating/)

## Installation
```shell
npm i --save material-ui-rating
```

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
|max             | `number`   | 5          | The max value of the rating bar.
|onChange*       | `function` |            | Fired when a value is clicked.
|style           | `object`   |            | Override the inline-styles of the root element.
|value           | `number`   | 0          | The value of the rating bar.


\* required property

## License

The files included in this repository are licensed under the MIT license.
