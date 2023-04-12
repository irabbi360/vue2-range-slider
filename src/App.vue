<template>
  <div id="app">
    <HelloWorld :min="500" :max="50000" v-model="value"/>
  </div>
</template>

<script>
import HelloWorld from './components/RangeSlider.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
      return {
        value: {
          min: 0,
          max: 0
        }
      }
    }
}
</script>

<style>

</style>
