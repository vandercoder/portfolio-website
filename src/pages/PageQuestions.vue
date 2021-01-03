<template>
  <div>
    <div id="header">
      <h1 class="text-4xl text-left sm:text-5xl font-semibold">
        Quick Questions
      </h1>
      <p class="text-lg sm:text-xl text-gray-300 font-thin tracking-wide">
        Not frequently asked per se, but I have had people ask these questions.
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
              class="w-11/12 text-lg text-left sm:text-xl font-semibold"
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
              class="slide-fade-answer text-lg sm:text-xl text-gray-300 font-light tracking-wide py-2"
              v-html="question.answer" 
              v-bind:key="question.id" 
              v-show="question.showAnswer"
            >
            </p>
          </transition>
        </div>
      </transition-group>
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
          ask: `"So uh.. what should I call you?"`,
          answer:`People usually call me <span class="italic">'Dika'</span> in 
          Indonesia. Though it usually doesn't sound good in English. 
          So you can call me <span class="italic">'Andy'</span> as well.`,
          showAnswer: false
        },
        { 
          id: 2,
          ask: `"Oh, so which University did you go into?"`,
          answer: `I went to UGM in Yogyakarta, Indonesia.`,
          showAnswer: false
        },
        { 
          id: 3,
          ask: `"What books do you like to read?"`,
          answer: `Check out my 
              <a href="https://www.goodreads.com/andiwilliam" 
              class="hvr-bounce-to-top">goodreads</a>, 
              maybe we have some common book interests.`,
          showAnswer: false,
        },
        { 
          id: 4,
          ask: `"Can you hack Facebook?"`,
          answer: `No..`,
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