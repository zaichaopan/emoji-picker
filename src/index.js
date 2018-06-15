import EmojiPicker from './components/EmojiPicker.vue';

const plugin = {
  install (Vue, options) {
    Vue.component(EmojiPicker.name, EmojiPicker);
  }
};

export default plugin;
