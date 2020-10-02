<template>
  <div>
    <div class="absolute flex justify-between z-30 w-full lg:hidden top-0 right-0 p-8">
      <div 
        class = "pl-2"
        v-bind:class="{'opacity-0' : currentPage=='PageHome'}"
        v-on:click="changePage('Home')"
      >
        <font-awesome-icon :icon="['fas', 'chevron-left']" fixed-width>
        </font-awesome-icon>
      </div>
      <div class="cursor-pointer" 
        v-on:click="$store.commit('toggleSidebar')" 
        v-bind:class="{'active' : $store.state.activeSidebar}">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
    </div>
    
    <nav 
      id="menu" 
      class="h-screen transition-width duration-300 fixed z-10 top-0 right-0 text-lg py-32 w-0 font-montserrat shadow-xl bg-black-100 lg:w-1/2 lg:bg-transparent lg:shadow-none lg:block lg:pl-24 lg:flex-grow lg:pt-40"
      v-bind:class="{ 'w-3/5': $store.state.activeSidebar }"
    >
      <h3 class="text-xl px-8  text-gray-300 font-bold">Menu</h3>
      <div
        class="block mt-4 px-8 font-semibold transition-all duration-300 hover:opacity-75 cursor-pointer"
        v-for="page in pages"
        :key="page.id"
        v-on:click="changePage(page.name); $store.commit('toggleSidebar');"
        v-bind:class="{ 'text-red-pink' : isActivePage(page) }"
      >
      <font-awesome-icon :icon="[getIconFamily(page), getIconName(page)]" fixed-width>
      </font-awesome-icon>
      {{ page.name }}
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'TheSidebar',
  props: ['currentPage'],
  data () {
    return {
      pages: [
        {
          id: 1,
          icon: "fas-home",
          name: "Home",
        },
        {
          id: 2,
          icon: "far-file-code",
          name: "Stacks",
        },
        {
          id: 3,
          icon: "far-sticky-note",
          name: "Portfolio",
        },
        {
          id: 4,
          icon: "far-question-circle",
          name: "Questions"
        },
      ]
    }
  },
  methods: {
    changePage: function(pageName) {      
      let page = "Page" + pageName;
      this.$store.commit('changePage', page);
    },
    isActivePage: function(page) {
      let pageName = "Page" + page.name;
      let active = false;
      if (this.currentPage === pageName) {
        active = true;
      }
      return active;
    },
    getIconFamily: function(page){
      return page.icon.split('-')[0];
    },
    getIconName: function(page){
      return page.icon.split(/-(.+)/)[1]; //regex captures +1 separator '-'
    },
  }
}
</script>

<style scoped>

.bar1, .bar2, .bar3 {
  width: 22px;
  height: 2px;
  background-color: white;
  margin: 6px 0;
  transition: 0.4s;
}

.active .bar1 { opacity: 0; }

.active .bar2 { 
  -webkit-transform: rotate(-45deg) translate(-2px, 3px);
  transform: rotate(-45deg) translate(2px, -1px);
}

.active .bar3 {
  -webkit-transform: rotate(45deg) translate(-2px, -4px);
  transform: rotate(45deg) translate(-6px, -8px);
}
</style>