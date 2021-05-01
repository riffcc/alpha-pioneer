import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import es from 'vuetify/src/locale/es';

import Star from '../assets/icons/Star.vue'
import Search from '../assets/icons/Search.vue'
import QuestionCircle from '../assets/icons/QuestionCircle.vue'
import Music from '../assets/icons/Music.vue'
import Gamepad from '../assets/icons/Gamepad.vue'
import Film from '../assets/icons/Film.vue'
import Books from '../assets/icons/Books.vue'

Vue.use(Vuetify);

const MY_ICONS = {
  star: '../assets/icons/star.svg'
}

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#ee44aa',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
  },
  lang: {
      locales: { es },
      current: 'es',
  },
  icons: {
    values: {
      star: { component: Star },
      music: { component: Music },
      video: { component: Film },
      gamepad: { component: Gamepad },
      books: { component: Books },
      info: { component: QuestionCircle },
      search: { component: Search },
    },
  },
});
