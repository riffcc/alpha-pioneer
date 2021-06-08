import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

// @ts-ignore
import lineClamp from "vue-line-clamp"
import vueDebounce from "vue-debounce"
import axios from "axios"
import vueAxios from "vue-axios"
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
// @ts-ignore
import VueVideoPlayer from 'vue-vjs-hls'

Vue.config.productionTip = false

VueVideoPlayer.config({
  youtube: true,  // default false
  switcher: true, // default true
  hls: true       // default true
})

Vue.use(VueVideoPlayer)
Vue.use(PerfectScrollbar, {})
Vue.use(vueAxios, axios)
Vue.use(vueDebounce, { defaultTime: '700ms' })
Vue.use(lineClamp, {})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
