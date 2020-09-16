import db from '../../db'

export default {
  state: {
    chats: [],
    chatMessages: []
  },
  mutations: {
    setChats(state, payload) {
      state.chats = payload
    },
    setChatMessages(state, payload) {
      state.chatMessages = payload
    },
    setMessage(state, payload) {
      state.chatMessages.push(payload)
    }
  },
  actions: {
    // Simulate getting chats from the database
    fetchChats({ commit }) {
      commit('setChats', db)
    },
    async fetchChatById({ state, commit }, id) {
      commit('setChatMessages', []) // clear messages in store
      // Fake api with artificial random delay between 0 and 1 seconds
      const messages = await new Promise(resolve => {
        setTimeout(() => {
          const messagesByChatId = state.chats.find(chat => chat.id == id).parts
          resolve(messagesByChatId)
        }, Math.random() * 2000)
      })
      commit('setChatMessages', messages)
      return true
    },
    async sendMessage({ state, commit }, { text, author }) {
      // Simulate sending message to server
      const message = await new Promise(resolve => {
        setTimeout(() => {
          const lastMessageId = state.chatMessages.slice(-1)[0].id + 1
          const message = {
            id: lastMessageId,
            text,
            created: Date.now(),
            author
          }
          resolve(message)
        }, Math.random() * 2000)
      })
      commit('setMessage', message)
      return true
    }
  },
  getters: {
    chats: s => s.chats,
    chatMessages: s => s.chatMessages,
    senderName: s => s.chatMessages[0].author
  }
}
