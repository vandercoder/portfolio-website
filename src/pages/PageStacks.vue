<template>
  <div>
    <div id="header">
      <h1 class="text-4xl text-left sm:text-5xl font-semibold">
        Tech Stacks
      </h1>
      <div class="text-lg sm:text-xl text-gray-300 font-thin tracking-wide">
        What I use for work
      </div>
      <TheLine/>
    </div>

    <div id="content">
      <div
        class="relative cursor-pointer"
        v-for="(field, fieldIndex) in fields" :key="field.id"
        v-on:click="toggleInfo(field.id)"
      >
        <h2
          class="text-xl text-left sm:text-2xl font-semibold"
          v-bind:class="{ 'mt-10':fieldIndex !== 0}"
        >
          {{ field.area }}
        </h2>
        <transition name="fade-show">
          <p
            class="fade-show-info text-xs sm:text-sm font- z-10 text-gray-400 absolute p-4 my-2 leading-relaxed rounded-lg bg-black-100 border-t-2 border-gray-600"
            v-show="field.id === activeInfo" v-html="field.info"
          >
          </p>
        </transition>
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
          ],
          info: `
            I've been using Python for around 3 years. I used it for ML projects
            as well as for my last position in Testing. However, JavaScript has been the 
            language for my web projects during the past year.
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
          info: `
          I have more than 1 year of experience
          working in front-end.
          Vue was the first front-end framework I used and it's 
          what I prefer to use for my projects. I've used React on some
          projects, but I still use Vue most of the time.
          <br><br> 
          For CSS, I generally make use of TailwindCSS. I've also used 
          Bulma and Bootstrap in the past.
          `,
          showInfo: false,
        },
        {
          id: 3,
          area: "Back-End Web",
          stacks: [
            { name: 'Ruby on Rails', icon: '', active: true},
            { name: 'Django', icon: '', active: true},
          ],
          info: `
          I have less than 1 year of experience working in Back End. I generally
          go with Django. Ruby on Rails has been the framework I used the 
          latest.
          `,
          showInfo: false,
        },
        {
          id: 4,
          area: "QA Test Automation",
          stacks: [
            { name: 'Appium', icon: '', active: true},
            { name: 'Selenium', icon: '', active: true},
          ],
          info: `I have less than 1 year of experience working in Testing. 
          My previous position involves developing an automated black-box 
          testing using Appium and Selenium. There, I wrote the framework 
          using Python.`,
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
    transition: all 0.4s ease;
    transform-origin: top;
  }

  .fade-show-enter, .fade-show-leave-to{
    opacity: 0;
    transform: translateY(100px);
  }

  .fade-show-leave-active {
    position: absolute;
  }

</style>