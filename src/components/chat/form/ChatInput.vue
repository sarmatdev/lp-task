<template>
  <input
    class="chat-input"
    :value="value"
    @input="$emit('input', $event.target.value)"
    :placeholder="placeholder"
    type="text"
    :disabled="disabled"
    ref="chatInput"
  />
</template>

<script>
export default {
  props: {
    value: String,
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    keepFocus() {
      this.$refs.chatInput.focus()
    }
  },
  mounted() {
    this.keepFocus()
  },
  updated() {
    this.keepFocus()
  }
}
</script>

<style lang="scss">
.chat-input {
  outline: none;
  background: none;
  border: none;
  width: 85%;
  color: $grey-10;
}
</style>
