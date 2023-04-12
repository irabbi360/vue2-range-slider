# vue-range-slider

Range slider component of Vue.js

## Features

- Compatible with native `real time` behavior
- `v-model` event support
- Touch device support
## Requirements

Vue >= 2.0
# Installation

## NPM
```
npm install --save vue-range-slider
```
## Yarn
```
yarn add vue-range-slider
```

## Usage

### Basic Usage
Just import vue-range-slider component and use it in your components. The props are compatible with native `v-model` element, so you can use `min`, `max`, `step` as a object.

```html
<template>
  <range-slider
    class="slider"
    min="10"
    max="1000"
    step="10"
    v-model="sliderValue">
  </range-slider>
</template>

<script>
import RangeSlider from 'vue-range-slider'
// you probably need to import built-in style
import 'vue-range-slider/dist/vue-range-slider.css'

export default {
  data () {
    return {
      sliderValue: {
        min: 0,
        max: 0,
      }
    }
  },
  components: {
    RangeSlider
  }
}
</script>

<style>

</style>
```
### Available props:

- `disabled` - if true, the slider value cannot be updated.
- `min` - minimum value of the slider.
- `max` - maximum value of the slider.
- `step` - granularity of the slider value. e.g. if this is 3, the slider value will be 3, 6, 9, ...


### Install Globally
```
Vue.use(VueRangeSlider)
```

### Use Components Locally
```
import VueRangeSlider from 'vue-range-slider'
```
## License

MIT