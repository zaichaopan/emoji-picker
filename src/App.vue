<template>
    <div class="message">
        <textarea name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  v-model="message"
                  @click="e => selectionEnd = e.target.selectionEnd"
                  @input="e => selectionEnd= e.target.value.length"></textarea>
        <div class="message-emoji">
            <pick-a-emoji @emoji:picked="handleEmojiPicked" />
        </div>
    </div>
</template>

<script>
import PickAEmoji from './components/PickAEmoji.vue';

export default {
  name: 'App',
  components: {
    PickAEmoji
  },
  data () {
    return {
      selectionEnd: 0,
      message: ''
    };
  },
  methods: {
    handleEmojiPicked (emoji) {
      if (this.selectionEnd === 0) {
        return (this.message += emoji);
      }
      let start = this.message.substring(0, this.selectionEnd);
      let end = this.message.substring(this.selectionEnd);
      this.message = `${start}${emoji}${end}`;
      this.selectionEnd = 0;
    }
  }
};
</script>

<style lang="scss">
#app {
  .message {
    position: relative;

    textarea {
      width: 100%;
      font-size: 18px;
      border: 1px solid;
    }

    .message-emoji {
      position: absolute;
      bottom: 0px;
      right: 0px;
    }
  }
}
</style>
