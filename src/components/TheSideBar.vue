<template>
  <div>
    <div
      class="absolute flex justify-between w-full lg:hidden top-0 right-0 p-6"
    >
      <div 
        class = ""
        v-bind:class="{'opacity-0' : currentPage=='PageHome'}"
        v-on:click="changePage('Home')"
      >
        <font-awesome-icon :icon="['fas', 'chevron-left']" fixed-width>
        </font-awesome-icon>
      </div>
      <div 
        class="cursor-pointer z-30" 
        v-on:click="$store.commit('toggleSidebar')" 
        v-bind:class="{'active' : $store.state.activeSidebar}"
      >
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
    </div>
    
    <nav 
      id="menu" 
      class="overflow-hidden whitespace-no-wrap h-screen transition-width duration-500 fixed z-20 top-0 right-0 text-lg py-32 w-0 font-montserrat shadow-xl bg-black-300 text-center lg:text-left lg:w-1/2 lg:bg-transparent lg:shadow-none lg:block lg:pl-24 lg:flex-grow lg:pt-40"
      v-bind:class="{ 'w-full': $store.state.activeSidebar }"
    >
      <div
        class="block mt-4 px-8 font-light transition-all duration-500 hover:opacity-75 transform hover:-translate-y-1 cursor-pointer"
        v-for="page in pages"
        v-bind:key="page.id"
        v-on:click="changePage(page.name); $store.commit('toggleSidebar');"
        v-bind:class="{ 
          'text-red-pink' : isActivePage(page),
          'opacity-0 lg:opacity-100': !$store.state.activeSidebar,
        }"
      >
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
          name: "Home",
        },
        {
          id: 2,
          name: "Stacks",
        },
        {
          id: 3,
          name: "Portfolio",
        },
        {
          id: 4,
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