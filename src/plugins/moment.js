import Vue from 'vue'
import moment from 'moment'

moment.locale('ru', {
  // Months localization
  months: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split(
    '_'
  )
})

// Global moment registration
Vue.prototype.$moment = moment

export default moment
