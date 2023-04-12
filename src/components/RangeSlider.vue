<template>
  <div class="price-slider">
    <div class='range-slider'>
      <input type="range" :min="min" :max="max" step="1" v-model="sliderMin">
      <input type="number" :min="min" :max="max" step="1" v-model="sliderMin" class="d-inflex rs-float-left">
      <input type="range" :min="min" :max="max" step="1" v-model="sliderMax">
      <input type="number" :min="min" :max="max" step="1" v-model="sliderMax" class="d-inflex rs-float-right">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    min: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    },
    value: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      minAngle: JSON.parse(JSON.stringify(this.min)),
      maxAngle: JSON.parse(JSON.stringify(this.max))
    };
  },
  computed: {
    sliderMin: {
      get() {
        var val = parseInt(this.minAngle);
        return val;
      },
      set(val) {
        val = parseInt(val);
        if (val > this.maxAngle) {
          this.maxAngle = val;
        }
        this.minAngle = val;
        this.value.min = val
      }
    },
    sliderMax: {
      get() {
        var val = parseInt(this.maxAngle);
        return val;
      },
      set(val) {
        val = parseInt(val);
        if (val < this.minAngle) {
          this.minAngle = val;
        }
        this.maxAngle = val;
        this.value.max = val
      }
    }
  }
};
</script>
<style scoped>
.range-slider {
  width: 100%;
  margin: auto;
  text-align: center;
  position: relative;
  height: 6em;
}
.range-slider input{
  background: transparent !important;
  font-size: 1rem;
  width: auto !important;
}
.range-slider .d-inflex {
    display: inline-flex;
    float: left;
}

.range-slider .rs-float-left {
    float: left;
}

.range-slider .rs-float-right {
    float: right;
}

.range-slider input[type=range] {
  position: absolute;
  left: 0;
  bottom: 0;
}

input[type=number] {
  border: 1px solid #ddd;
  text-align: center;
  font-size: 1.6em;
  -moz-appearance: textfield;
}

input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type=number]:invalid,
input[type=number]:out-of-range {
  border: 2px solid #ff6347;
}

input[type=range] {
  -webkit-appearance: none;
  width: 100%;
}

input[type=range]:focus {
  outline: none;
}

input[type=range]:focus::-webkit-slider-runnable-track {
  background: #2497e3;
}

input[type=range]:focus::-ms-fill-lower {
  background: #2497e3;
}

input[type=range]:focus::-ms-fill-upper {
  background: #2497e3;
}

input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  background: #2497e3;
  border-radius: 1px;
  box-shadow: none;
  border: 0;
}

input[type=range]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  box-shadow: 0px 0px 0px #000;
  border: 1px solid #2497e3;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #a1d0ff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7px;
}

</style>