import RangeSlider from "./components/RangeSlider.vue";

const Vue2RangeSlider = {
 install(Vue) {
  // Let's register our component globally
  // https://vuejs.org/v2/guide/components-registration.html
  Vue.component("range-slider", RangeSlider);
 }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Vue2RangeSlider);
}

export default Vue2RangeSlider;