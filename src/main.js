import Vue from 'vue'
import App from './App.vue'

import 'es6-promise/auto'
import './assets/tailwind.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faChevronDown, faChevronUp, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faPython, faGoodreads, faJsSquare, faVuejs, faReact, faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faHome, faChevronDown, faChevronUp, faChevronLeft, 
  faGithub, faLinkedin, faPython, faGoodreads, faJsSquare, faVuejs, faReact, faCss3Alt,
  faEnvelope
)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
