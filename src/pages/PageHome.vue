<template>
  <div>
    <h1 class="text-5xl text-left sm:text-5xl font-semibold">
      Hi there.
    </h1>
    <h2 class="text-2xl text-left sm:text-3xl font-semibold mt-2 sm:mt-6">
      My name is <span class="whitespace-no-wrap">Andika William.</span>
    </h2>
    <p class="text-base sm:text-xl text-gray-300 font-light tracking-wide mt-6 sm:mt-8">
      I'm a Web Developer from Jakarta with experience in writing 
      <span class="font-semibold"> Python </span> / <span class="font-semibold">Javascript</span> 
      and using <span class="font-semibold">Vue.js</span>. 
    </p>
    <p class="text-base sm:text-xl text-gray-300 font-light tracking-wide mt-6 sm:mt-8">
      For more on the technologies that I've used, check out my 
      <span 
        class="hvr-bounce-to-top cursor-pointer pb-1" 
        v-on:click="$store.commit('changePage', 'PageStacks');">
        stacks</span>. 
      You can also check out some of my works on my 
      <span 
        class="hvr-bounce-to-top cursor-pointer pb-1"
        v-on:click="$store.commit('changePage', 'PagePortfolio');">
        portfolio</span>. 
    </p>
    <p class="text-base sm:text-xl text-gray-300 font-light tracking-wide mt-6 sm:mt-8">
      Besides programming and helping around the house, I spend my time reading 
      <span class="italic">books, running, </span> and
      <span class="italic">learning the guitar.</span> 
    </p>
    <div class="flex justify-between text-sm sm:text-lg text-gray-300 font-light tracking-wide mt-6 sm:mt-8">
      <p class="transition duration-300 transform hover:-translate-y-2">
        <a 
          target="_blank" rel="noopener noreferrer" 
          href="mailto:andikawilliam@outlook.com" 
          class="mr-1">
          Contact Me
          <font-awesome-icon :icon="['far', 'envelope']" fixed-width>
          </font-awesome-icon>
        </a>
      </p>

      <p>
        <a 
          target="_blank" rel="noopener noreferrer" 
          href="https://github.com/andikawilliam" 
          class="mr-2">
          <font-awesome-icon :icon="['fab', 'github']" size='lg' fixed-width
            class="transition duration-300 transform hover:scale-105 hover:-translate-y-2"
          >
          </font-awesome-icon>
        </a>
        <a 
          target="_blank" rel="noopener noreferrer" 
          href="https://www.linkedin.com/in/andika-william-62777314a/"
        >
          <font-awesome-icon :icon="['fab', 'linkedin']" size='lg' fixed-width
            class="transition duration-300 transform hover:scale-105 hover:-translate-y-2"
          >
          </font-awesome-icon>
        </a>
      </p>
    </div>
    
  </div>
</template>

<script>

</script>

<style>

</style>
