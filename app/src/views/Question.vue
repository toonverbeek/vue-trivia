<template>
  <div v-if="this.$store.state.loading" class="loading">Loading...</div>
  <div v-else-if="this.$store.state.error" class="loading">{{ this.$store.state.error }}</div>

  <div v-else-if="currentQuestion" class="question">
    <span>Question {{ questionId }} / {{ this.$store.state.questions.length }} {{ isLastQuestion ? ' (Last one!)' : '' }} </span>
    <h1 v-html="currentQuestion.question"></h1>
    <div class="answers">
      <div class="answer" :class="answer === picked && 'picked'" v-for="(answer, index) in allAnswers" :key="index">
        <input type="radio" name="answer" :id="index" v-model="picked" :value="answer">
        <label :for="index" v-html="answer"></label>
      </div>
    </div>
    <div class="question-nav">
      <router-link to='/' class="btn-quit">Quit</router-link>
      <router-link class="button btn-next" v-if="!isLastQuestion" :to="{name:'question', params: {id: nextQuestionId}}">Next</router-link>
      <router-link class="button btn-finish" v-else :to="{name:'summary'}">Finish</router-link>
    </div>
  </div>
</template>

<script>
export default {
  // since the component does not get re-rendered every time, we hook into the routing to determine when to update the score
  // there's very probably a better way to do this
  beforeRouteUpdate (to, from, next) {
    this.submitAnswer()
    this.picked = ''
    next()
  },
  beforeRouteLeave (to, from, next) {
    this.submitAnswer()
    next()
  },
  data () {
    return {
      picked: '',
      loading: false,
      error: null
    }
  },
  computed: {
    questionId () {
      return this.$route.params.id
    },
    currentQuestion () {
      return this.$store.state.questions[parseInt(this.questionId) - 1]
    },
    nextQuestionId () {
      return parseInt(this.questionId) + 1
    },
    isLastQuestion () {
      return this.$store.state.questions.length === parseInt(this.questionId)
    },
    allAnswers () {
      const answers = [...this.currentQuestion.incorrect_answers]
      answers.push(this.currentQuestion.correct_answer)
      return answers
    },
    isActiveGame () {
      return this.$store.state.questions.length > 0
    }
  },
  methods: {
    submitAnswer () {
      const payload = { questionId: this.questionId - 1, answer: this.picked }
      this.$store.commit('updateResults', payload)
    }
  }
}
</script>

<style scoped>
  .question {
    display: flex;
    flex-direction: column;
    background-color: var(--background-color);
    border: 2px solid black;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    padding: 1rem;
  }

  .question-nav {
    display: flex;
    align-items: center;
    align-self: flex-end;
  }

  .answers {
    display: flex;
    justify-content: center;
  }

  .answer {
    background: white;
    padding: 0.5rem;
    color: var(--black);
    border-radius: 4px;
    margin-left: 1rem;
    font-weight: 600;
  }

  .picked {
    background: var(--black);
    color: white;
  }

  .answer:hover {
    background: var(--black);
    color:white;
  }

   h1 {
    max-width: 75%;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: var(--black);
    margin: auto auto 1rem auto;
    border-radius: var(--radius);
  }

</style>
