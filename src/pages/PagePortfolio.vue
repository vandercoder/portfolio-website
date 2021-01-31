<template>
  <div>
    <div id="header">
      <h1 class="text-4xl text-left sm:text-5xl font-semibold">
        Showcase
      </h1>
      <p class="text-lg sm:text-xl text-gray-300 font-thin tracking-wide">
        Web design projects
      </p>
      <TheLine/>
    </div>

    <div id="content">
      <a 
        v-for="project in projects" :key="project.id" 
        v-bind:href="project.link" target="_blank" rel="noopener noreferrer"
      >
        <div
          class="relative sm:flex h-auto py-2 cursor-pointer transition duration-300 transform hover:opacity-75 hover:-translate-y-1"
        >
            <div class="sm:w-1/2">
              <transition appear>
                <img 
                  class="w-full h-full background-transparent shadow-lg rounded-lg opacity-75" 
                  v-bind:src="project.image"
                  v-bind:alt="project.name"
                  v-on:load="loadedImage(project)"
                >
              </transition>
            </div>
          <div class="flex items-center rounded-lg pt-2 pb-4 px-1 sm:px-6">
            <div>
              <p class="text-base sm:text-lg font-semibold text-white">
                {{ project.name }}
              </p>
              <p class="text-sm sm:text-base font-light text-gray-300">
                {{ project.desc }}
              </p>
              <p
                class="text-sm text-gray-500" 
                v-if="project.stackIcon">
                Made with 
                <font-awesome-icon 
                  v-bind:icon="['fab', project.stackIcon]" 
                  fixed-width
                >
                </font-awesome-icon>
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
    <div class="pt-4">
      Looking to build a website ?
      <a 
        target="_blank" rel="noopener noreferrer" 
        href="mailto:andikawilliam@outlook.com" 
        class="hvr-bounce-to-top mr-1"
      >
        Let's chat
      </a>
    </div>
  </div>
</template>

<script>
import TheLine from '../components/TheLine.vue';
import CleanprofImage from '../assets/cleanprof-web.png'
import TemanGaweImage from '../assets/temangawe-web.png'
import DitoBuwonoImage from '../assets/ditobuwono-web.png'

export default {
  name: 'PagePortfolio',
  components: {
    TheLine
  },
  data () {
    return {
      projects: [
        {
          id: 1,
          name: "Cleanprof.id",
          desc: "Retailer Website | 2020",
          link: "https://www.cleanprof.id/",
          image: CleanprofImage,
          imageLoaded: false,
          stackIcon: "vuejs",
        },
        {
          id: 2,
          name: "TemanGawe.com",
          desc: "Coffee Shop Website | 2020",
          link: "https://www.temangawe.com/",
          image: TemanGaweImage,
          imageLoaded: false,
          stackIcon: "react",
        },
        {
          id: 3,
          name: "Ditobuwono.com",
          desc: "Portfolio Website | 2020",
          link: "https://www.ditobuwono.com/",
          image: DitoBuwonoImage,
          imageLoaded: false,
          stackIcon: "vuejs"
        },
      ]
    }
  },
  methods: {
    loadedImage: function(project) {
      project.imageLoaded = true;
    }
  }
}
</script>

<style scoped>
.fade-image-enter-active {
  transition: opacity 1s ease-in-out;
}

.fade-image-enter {
  opacity: 0;
}

.fade-image-enter-to {
  opacity: 1;
}


</style>