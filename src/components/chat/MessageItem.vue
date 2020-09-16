<template>
  <router-link
    exact
    tag="li"
    :to="`/${id}`"
    active-class="chat-link-active"
    class="message-item"
  >
    <header class="message-item__header">
      <h2 class="message-item__subject">
        <slot name="subject" />
      </h2>
      <span class="message-item__created">
        <slot name="created" />
      </span>
    </header>
    <p class="message-item__summary">
      <slot name="summary" />
    </p>
  </router-link>
</template>

<script>
export default {
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  }
}
</script>

<style lang="scss">
.message-item {
  height: 100px;
  width: 100%;
  padding: 20px;
  background-color: $grey-1;
  border-bottom: 1px solid $grey-2;
  transition: background-color 0.1s ease-in-out;
  position: relative;

  &:hover,
  &:focus {
    background-color: $white;
    cursor: pointer;
  }

  &__header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    line-height: 2;
  }

  &__subject {
    color: $grey-9;
  }

  &__created {
    color: $grey-4;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  &__summary {
    color: $grey-10;
    display: block;
    width: 100%;
    height: 30px;
    white-space: nowrap;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
