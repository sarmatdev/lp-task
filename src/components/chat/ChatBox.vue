<template>
  <main class="chat-container">
    <transition-group ref="chat" tag="ul" name="slide" class="chat-messages">
      <li
        class="message"
        v-for="message in chatMessages"
        :class="{ 'message--sender': isMessageSender(message.author) }"
        :key="message.id"
      >
        <p class="message__text">
          {{ message.text }}
        </p>
        <div class="message__info">
          <span class="message__author">{{ message.author }}</span>
          <span class="message__created">
            {{ detailedDate(message.created) }}
          </span>
        </div>
      </li>
    </transition-group>
    <ChatForm />
    <transition name="fade">
      <Loader v-show="loader" />
    </transition>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import formatDate from '@/mixins/formatDate'
import ChatForm from '@/components/chat/form/ChatForm'
import Loader from '@/components/Loader'
export default {
  props: {
    chatMessages: {
      type: Array,
      required: true
    },
    loader: {
      type: Boolean,
      default: false
    }
  },
  mixins: [formatDate],
  components: {
    ChatForm,
    Loader
  },
  computed: {
    ...mapGetters({
      senderName: 'senderName'
    })
  },
  methods: {
    scrollToEnd() {
      const chat = this.$refs.chat.$el
      chat.scrollTop = chat.scrollHeight
    },
    isMessageSender(author) {
      if (this.senderName === author) return true
      return false
    }
  },
  updated() {
    // Keep chat scrolled to bottom ever
    this.scrollToEnd()
  }
}
</script>

<style lang="scss">
.chat-container {
  background-color: $white;
  position: relative;
  z-index: 100;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  flex: 0 0 70%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;

  .chat-messages {
    padding: 20px;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
  }

  .message {
    margin-top: 20px;
    max-width: 380px;
    width: 100%;
    list-style: none;

    &--sender {
      align-self: flex-end;
      align-items: flex-end;

      .message {
        align-items: flex-end;

        &__text {
          background-color: $teal-light;
          border-radius: 8px 8px 0px 8px;
        }

        &__info {
          justify-content: flex-end;
        }
      }
    }

    &__text {
      border-radius: 8px 8px 8px 0px;
      padding: 20px;
      color: $grey-8;
      background: $white-smoke;
    }

    &__info {
      display: flex;
      align-items: center;
      margin-top: 15px;
    }

    &__author {
      font-size: 13px;
      font-weight: 500;
      color: $black;
    }

    &__created {
      margin-left: 12px;
      font-size: 10px;
      color: $grey-4;
    }
  }
}
</style>
