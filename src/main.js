import Vue from 'vue'
import App from './App.vue'

import 'es6-promise/auto'
import './assets/tailwind.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faChevronDown, faChevronUp, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faPython, faGoodreads, faJsSquare, faVuejs, faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFileCode, faStickyNote, faQuestionCircle } from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faHome, faChevronDown, faChevronUp, faChevronLeft, 
  faGithub, faLinkedin, faPython, faGoodreads, faJsSquare, faVuejs, faCss3Alt,
  faEnvelope, faFileCode, faStickyNote, faQuestionCircle,
)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
