<template>
  <div class="container">
    <section class="chat">
      <MessagesList :chats="chats" />
      <!-- this hack with key props needs to force component re-render when route path will changed -->
      <router-view :key="$route.params.id"></router-view>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import MessagesList from '@/components/chat/MessagesList'
export default {
  name: 'Chat',
  components: {
    MessagesList
  },
  computed: {
    ...mapGetters({
      chats: 'chats'
    })
  },
  methods: {
    ...mapActions({
      fetchChats: 'fetchChats'
    })
  },
  created() {
    this.fetchChats()
  }
}
</script>

<style>
.chat {
  max-width: 980px;
  width: 100%;
  height: 100vh;
  background: #f3f6f8;
  margin: 0 auto;
  display: flex;
}
</style>
