import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    primary: colors.indigo.darken4, // #E53935
    secondary: colors.amber.lighten1, // #FFCDD2
    accent: colors.indigo.base // #3F51B5
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
