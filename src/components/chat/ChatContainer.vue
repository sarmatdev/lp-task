<template>
  <ChatBox :chat-messages="chatMessages" :loader="loader" />
</template>

<script>
import { mapGetters } from 'vuex'
import ChatBox from '@/components/chat/ChatBox'
export default {
  components: {
    ChatBox
  },
  data() {
    return {
      loader: false
    }
  },
  computed: {
    ...mapGetters({
      chatMessages: 'chatMessages'
    })
  },
  methods: {
    loadChat() {
      this.loader = true
      this.$store.dispatch('fetchChatById', this.$route.params.id).then(() => {
        this.loader = false
      })
    }
  },
  created() {
    this.loadChat()
  }
}
</script>

<style lang="scss"></style>
