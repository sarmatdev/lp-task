<template>
  <form @submit.prevent class="chat-form">
    <ChatInput
      v-model="message"
      placeholder="Введите текст..."
      :disabled="loading"
    />
    <SendButton @click.native="sendMessage" :loading="loading" />
  </form>
</template>

<script>
import { mapGetters } from 'vuex'
import ChatInput from '@/components/chat/form/ChatInput'
import SendButton from '@/components/chat/form/SendButton'
export default {
  components: {
    ChatInput,
    SendButton
  },
  data() {
    return {
      message: '',
      loading: false
    }
  },
  computed: {
    ...mapGetters({
      senderName: 'senderName'
    })
  },
  methods: {
    async sendMessage() {
      if (this.message != '') {
        this.loading = true
        const res = await this.$store.dispatch('sendMessage', {
          text: this.message,
          author: this.senderName
        })
        this.message = ''

        if (res) {
          this.loading = false
        }
      }
    }
  }
}
</script>

<style class="chat-form">
.chat-form {
  width: 100%;
  height: 80px;
  background-color: $white;
  border-top: $border-style;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0 30px 30px;
}
</style>
