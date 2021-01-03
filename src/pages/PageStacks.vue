<template>
  <div>
    <div id="header">
      <h1 class="text-4xl text-left sm:text-5xl font-semibold">
        My Stacks
      </h1>
      <div class="text-lg sm:text-xl text-gray-300 font-thin tracking-wide">
        What I use for work
      </div>
      <TheLine/>
    </div>

    <div id="content">
      <div
        class="relative"
        v-for="(field, fieldIndex) in fields" :key="field.id"
        v-on:click="toggleInfo(field.id)"
      >
        <h2
          class="text-xl text-left sm:text-2xl font-semibold"
          v-bind:class="{ 'mt-10':fieldIndex !== 0}"
        >
          {{ field.area }}
        </h2>
        <p 
          class="sm:inline-block text-lg sm:text-xl text-gray-400 tracking-wide mt-2 sm:mt-2"
          v-for="(stack, stackIndex) in field.stacks" :key="stack.name"
          v-bind:class="{ 'sm:pl-12':stackIndex !== 0, 'opacity-25':!stack.active}"
        >
          <font-awesome-icon 
            v-bind:icon="['fab', stack.icon]" fixed-width
            v-if=stack.icon
          >
          </font-awesome-icon>
          {{ stack.name }}
        </p>
      </div>
    </div>

    <div class="text-sm text-right text-gray-300 mt-4"> 
      <div class="bg-gray-400 h-2 w-2 inline-block"></div> in touch 
      <div class="bg-gray-400 h-2 w-2 inline-block opacity-25 ml-2"></div> not in touch
    </div>
    
  </div>
</template>

<script>
import TheLine from '../components/TheLine.vue';


export default {
  name: 'PageStacks',
  components: {
    TheLine
  },
  data () {
    return {
      activeInfo: "",
      fields: [
        {
          id: 1,
          area: "Programming Languages",
          stacks: [
            { name: 'Python', icon: 'python', active: true},
            { name: 'JavaScript', icon: 'js-square', active: true},
            { name: 'Ruby, Java, C++', icon: '', active: false}
          ],
          info: `Sample projects:
          `,
          showInfo: false,
        },
        {
          id: 2,
          area: "Front-End Web",
          stacks: [
            { name: 'Vue.js', icon: 'vuejs', active: true},
            { name: 'React', icon: 'react', active: true},
            { name: 'TailwindCSS', icon: 'css3-alt', active: true},
            // { name: 'Bulma, Bootstrap', icon: '', active: false}
          ],
          info: `Vue.js was the first front-end framework I learned, and it's 
          what I prefer to use for my projects. I'm learning React right now, but 
          I still use Vue most of the time.<br><br> 
          For CSS, I like to use TailwindCSS 
          since I find it to be more productive and intuivite. I've also used 
          Bulma and Bootstrap in the past.`,
          showInfo: false,
        },
        {
          id: 3,
          area: "Back-End Web",
          stacks: [
            { name: 'Ruby on Rails', icon: '', active: true},
            { name: 'Django', icon: '', active: true},
            { name: 'Flask', icon: '', active: false}
          ],
          info: `Recently, I've been using Ruby on Rails for building
          dynamic websites. I've also used Django since I like to write in Python.`,
          showInfo: false,
        },
        {
          id: 4,
          area: "QA Test Automation",
          stacks: [
            { name: 'Appium', icon: '', active: true},
            { name: 'Selenium', icon: '', active: true},
            { name: 'Katalon', icon: '', active: false}
          ],
          info: `Used to worked on automating black-box 
          testing using Appium and Selenium. I'm currently learning Jest..`,
          showInfo: false,
        },
      ]
    }
  },
  methods: {
    toggleInfo(index) {
      if(this.activeInfo === index) {
        this.activeInfo = "";
      }
      else {
        this.activeInfo = index;
      }
    },
  }
}
</script>

<style scoped>

  /* Info show*/
  .fade-show-info {
    transition: all 0.8s ease;
    transform-origin: top;
  }

  .fade-show-enter, .fade-show-leave-to{
    opacity: 0;
    transform: translateY(100px);
    /* transform: translateY(100px); */
  }

  .fade-show-leave-active {
    position: absolute;
  }

</style>