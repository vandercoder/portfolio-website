<template>
  <div>
    <div id="header">
      <h1 class="text-4xl text-left sm:text-5xl font-semibold">
        FAQ
      </h1>
      <p class="text-lg sm:text-xl text-gray-300 font-thin tracking-wide">
        Quick questions
      </p>
      <TheLine/>
    </div>

    <div id="content">
      <transition-group name="slide">
        <div 
          class="slide-question relative py-4"
          v-for="question in questions" 
          v-bind:key="question.id">
          
          <div 
            class="flex justify-between items-center cursor-pointer"
            v-on:click="toggleAnswer(question)"
          >
            <h2 
              class="w-11/12 text-base text-left sm:text-lg font-semibold"
              v-html="question.ask"
            >
            </h2>
            <font-awesome-icon 
              v-bind:icon="['fas', 'chevron-down']" fixed-width
              class="transition-tranform duration-500"
              v-bind:class="{ 'transform rotate-180' : question.showAnswer}"
            >
            </font-awesome-icon> 
          </div>
          <transition name="slide-fade">
            <p
              class="slide-fade-answer text-base sm:text-lg text-gray-300 font-light tracking-wide py-2"
              v-html="question.answer" 
              v-bind:key="question.id" 
              v-show="question.showAnswer"
            >
            </p>
          </transition>
        </div>
      </transition-group>
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

export default {
  name: 'PageQuestions',
  components: {
    TheLine
  },
  data () {
    return {
      questions: [
        { 
          id: 1,
          ask: `"What should I call you?"`,
          answer:`Usually it's <span class="italic">'Dika'</span>.
          But <span class="italic">'Andy'</span> works as well`,
          showAnswer: false
        },
        { 
          id: 2,
          ask: `"Do you accept web design projects?"`,
          answer: `Sure!
          <a 
            target="_blank" rel="noopener noreferrer" 
            href="mailto:andikawilliam@outlook.com" 
            class="hvr-bounce-to-top mr-1"
          >
            Let's have a chat
          </a> if you're looking to build one`,
          showAnswer: false,
        },
        { 
          id: 3,
          ask: `"How much is your rate?"`,
          answer: `Every project is unique. It really depends on the requirements
          you're looking for. <a 
            target="_blank" rel="noopener noreferrer" 
            href="mailto:andikawilliam@outlook.com" 
            class="hvr-bounce-to-top mr-1"
          >
            Let's have a discussion
          </a> and I'll give the rough estimate
          `,
          showAnswer: false,
        },
        { 
          id: 4,
          ask: `"What is the process?"`,
          answer: `It depends on the project, but generally we start with a 
          discussion followed by design & prototype. Which after approval, we 
          then move on to development
          `,
          showAnswer: false
        },
      ]
    }
  },
  methods: {
    toggleAnswer: function(question) {
      question.showAnswer = !question.showAnswer
    },
  },
}
</script>

<style scoped>
  .video-slider {
    overflow: hidden;
    position: relative;
  }

  .arrow-show {
    transform: rotate(180);
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

</style>