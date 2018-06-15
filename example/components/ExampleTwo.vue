<template>
    <div class="message-two">
        <div contenteditable="true"
             class="rich-editor-container"
             ref="textarea"
             @keypress.enter.prevent
             @input="updateBody($event.target.innerHTML)"
             @click="handleEditorClick"
             placeholder="Type a message...">
        </div>
        <div class="message-emoji">
            <emoji-picker @emoji:picked="handleEmojiPicked"
                          :data="emojis" />
        </div>
    </div>
</template>

<script>
import data from '../../data/emojis.json';

export default {
  data () {
    return {
      emojis: data,
      body: ''
    };
  },
  methods: {
    updateBody (text) {
      this.body = text;
    },
    handleEmojiPicked (emoji) {
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
@import "../../dist/emoji-picker.css";
.message-two {
  margin-top: 350px;
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
    top: 18px;
  }

  [contenteditable="true"]:empty:before {
    content: attr(placeholder);
    color: grey;
  }
}
</style>
