import Vue from 'vue';
import EmojiPicker from '../dist/emoji-picker.common.js';
import ExampleOne from './components/ExampleOne.vue';
import ExampleTwo from './components/ExampleTwo.vue';

Vue.use(EmojiPicker);

Vue.component('ExampleOne', ExampleOne);
Vue.component('ExampleTwo', ExampleTwo);

const app = new Vue({
  el: '#app'
});

export default app;
