import Axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    error: '',
    results: [],
    questions: [],
    score: 0
  },
  getters: {
    totalScore (state) {
      return state.results.reduce((acc, answer) => {
        return acc + answer.score
      }, 0)
    }
  },
  mutations: {
    updateResults (state, payload) {
      const { questionId, answer } = payload
      // Make a copy of the state so that Vue will react when it's replaced in L32
      const results = [...state.results]
      // using questionId instead of push allows for random IDs later on
      results[questionId] = {
        userAnswer: answer,
        score: state.questions[questionId].correct_answer === answer ? 1 : 0
      }
      state.results = results
    },
    resetResults (state) {
      state.results = []
    }
  },
  actions: {
    async fetchQuestions ({ commit, state }, payload) {
      const { difficulty } = payload
      try {
        state.loading = true
        const result = await Axios.get(`https://opentdb.com/api.php?amount=5&difficulty=${difficulty}`)
        if (result.status !== 200) {
          state.error = 'Something went wrong'
          return null
        }
        state.questions = result.data.results
      } catch (error) {
        state.error = error
      } finally {
        state.loading = false
      }
    }
  }
})
