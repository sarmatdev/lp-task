export default {
  methods: {
    regularDate(date) {
      return this.$moment(date)
        .locale('ru')
        .format('DD MMMM YYYY')
    },
    detailedDate(date) {
      return this.$moment(date)
        .locale('ru')
        .format('DD.MM.YYYY hh:mm')
    }
  }
}
