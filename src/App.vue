<template>
    <div class="message">
        <div contenteditable="true"
             class="rich-editor-container"
             ref="textarea"
             @keypress.enter.prevent
             @input="updateBody($event.target.innerHTML)"
             @click="handleEditorClick"
             placeholder="Type a message...">
        </div>
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
      message: '',
      body: ''
    };
  },
  methods: {
    updateBody (text) {
      this.body = text;
    },
    handleEmojiPicked (emoji) {
      console.log(emoji);
      this.$refs.textarea.innerHTML = `${this.$refs.textarea.innerHTML} ${emoji}`;
      this.updateBody(this.$refs.textarea.innerHTML);
    },
    handleEditorClick () {
      this.focusEditor();
    },
    focusEditor () {
      this.$refs.textarea.focus();
    }
  },
  mounted () {
    this.focusEditor();
  }
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
}
body {
  display: flex;
  justify-content: center;
  margin: 0;
}

.message {
  margin-top: 150px;
  position: relative;
  display: flex;
  width: 80%;
  .rich-editor-container {
    width: 100%;
    height: 2rem;
    border: 1px solid #ddd;
    border-radius: 9999px;
    padding: 5px 40px 5px 15px;
    line-height: 2rem;

    &:focus {
      outline: none;
    }
  }

  .message-emoji {
    position: absolute;
    right: 5px;
    top: 5px;
  }

  [contenteditable="true"]:empty:before {
    content: attr(placeholder);
    color: grey;
  }
}
</style>
