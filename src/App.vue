<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
