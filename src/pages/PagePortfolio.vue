<template>
  <div>
    <div id="header">
      <h1 class="text-4xl text-left sm:text-5xl font-semibold">
        Showcase
      </h1>
      <p class="text-lg sm:text-xl text-gray-300 font-thin tracking-wide">
        Web design projects
      </p>
      <hr class="border-2 opacity-75 my-4 ">
    </div>

    <div id="content">
      <a 
        v-for="project in projects" :key="project.id" 
        :href="project.link" target="_blank" rel="noopener noreferrer">
        <div class="relative sm:flex cursor-pointer transition-opacity duration-300 py-2 hover:opacity-75">
          <img 
            class="sm:w-1/2 h-full background-transparent shadow-lg rounded-lg opacity-75" 
            v-bind:src="project.image" :alt="project.name">
          <div class="flex items-center rounded-lg pt-2 pb-4 px-1 sm:px-4">
            <div>
              <p class="text-base sm:text-lg font-semibold text-white"> {{ project.name }}
              <p class="text-sm sm:text-base font-light text-gray-300">{{ project.desc }}</p>
            </div>
          </div>
        </div>
      </a>
    </div>

    <div class="text-base sm:text-lg text-gray-300 mt-4">
      "Wait this is it?" 
      <a 
        class="hvr-bounce-to-top" 
        target="_blank" rel="noopener noreferrer" 
        href="https://andikawilliam.github.io/"
      >Old portfolio</a>
    </div>
  </div>
</template>

<script>
import CleanprofImage from '../assets/cleanprof-web.png'
import TemanGaweImage from '../assets/temangawe-web.png'

export default {
  name: 'PagePortfolio',
  data () {
    return {
      projects: [
        {
          id: 1,
          name: "Cleanprof.id",
          desc: "Retailer Website | 2020",
          link: "https://www.cleanprof.id/",
          image: CleanprofImage,
        },
        {
          id: 2,
          name: "TemanGawe.com",
          desc: "Coffe Shop Website | 2020",
          link: "https://www.temangawe.com/",
          image: TemanGaweImage,
        },
      ]
    }
  }
}
</script>