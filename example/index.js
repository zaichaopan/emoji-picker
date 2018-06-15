import Vue from 'vue';
import EmojiPicker from '../dist/emoji-picker.umd.js';
import ExampleComponent from './components/ExampleComponent.vue';

Vue.use(EmojiPicker);

Vue.component('ExampleComponent', ExampleComponent);

const app = new Vue({
  el: '#app'
});

export default app;
