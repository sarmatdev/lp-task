<template>
  <aside class="messages">
    <header class="messages__header">
      <h1 class="messages__title">Сообщения</h1>
      <span class="messages__count">{{ chats.length }}</span>
    </header>
    <ul class="messages-list">
      <MessageItem v-for="chat in chats" :key="chat.id" :id="chat.id">
        <template slot="subject">{{ chat.subject }}</template>
        <template slot="created">{{ regularDate(chat.created) }}</template>
        <template slot="summary">{{ lastMessage(chat.id) }}</template>
      </MessageItem>
    </ul>
  </aside>
</template>

<script>
import MessageItem from '@/components/chat/MessageItem'
import formatDate from '@/mixins/formatDate'
export default {
  props: {
    chats: {
      type: Array
    }
  },
  mixins: [formatDate],
  components: {
    MessageItem
  },
  methods: {
    // Simple helper function for extracting last message from chat
    lastMessage(id) {
      return this.chats.find(chat => chat.id === id).parts.slice(-1)[0].text
    }
  }
}
</script>

<style lang="scss" scoped>
.messages {
  background-color: $grey-1;
  min-width: 200px;
  flex: 0 0 30%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  border-right: 1px solid $grey-2;

  &__header {
    border-bottom: 1px solid $grey-2;
    padding: 20px 24px;
    display: flex;
    align-items: center;
  }
  &__title {
    color: $grey-5;
    font-weight: 300;
  }

  &__count {
    margin-left: 10px;
    font-size: 14px;
    color: $grey-3;
    font-weight: 500;
  }
}
</style>
