<template>
  <div class="bg-gradient-to-r from-black-200 to-black-100 py-4 min-h-screen">
    <section 
      class="lg:flex px-10 py-16 font-montserrat text-white leading-relaxed"
    >
    <TheSideBar :currentPage="currentPage"/>
    
    <div 
      id="content" class="lg:pl-32 lg:w-1/2 transition-opacity duration-300 lg:opacity-100"
      v-bind:class="{'opacity-50': $store.state.activeSidebar}"
    >
      <transition name="fade" mode="out-in">
        <component :is="currentPage"></component>
      </transition>
    </div>
  </section>
  </div>
</template>

<script>
import { store } from './store/store'
import TheSideBar from './components/TheSideBar.vue';

import PageHome from './pages/PageHome.vue';
import PageStacks from './pages/PageStacks.vue';
import PagePortfolio from './pages/PagePortfolio.vue';
import PageQuestions from './pages/PageQuestions.vue';

export default {
  name: 'App',
  store,
  components: {
    TheSideBar, PageHome, PageStacks, PagePortfolio, PageQuestions
  },
  data () {
    return {
      activeOverlay: false,
    }
  },
  computed: {
    currentPage: function() {
      return this.$store.state.currentPage;
    },
    activeSidebar: function() {
      return this.$store.state.activeSidebar;
    }
  },
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .4s ease;
}
.fade-enter, .fade-leave-active /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-question {
  transition: all 1s;
}

/* Question slide */
.slide-fade-answer {
  transition: all 0.8s ease;
}

.slide-fade-enter, .slide-fade-leave-to{
  opacity: 0;
  transform: translateY(-10px);
}

.slide-fade-leave-active {
  position: absolute;
}

/* Bounce To Top */
.hvr-bounce-to-top {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
}
.hvr-bounce-to-top:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:#EB3352;
  /* background: #2098D1; */
  -webkit-transform: scaleY(0.14);
  transform: scaleY(0.14);
  -webkit-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-bounce-to-top:hover, .hvr-bounce-to-top:focus, .hvr-bounce-to-top:active {
  color: white;
}
.hvr-bounce-to-top:hover:before, .hvr-bounce-to-top:focus:before, .hvr-bounce-to-top:active:before {
  -webkit-transform: scaleY(0.9);
  transform: scaleY(0.9);
  -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
}

</style>