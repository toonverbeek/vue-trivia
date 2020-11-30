<template>
  <div class="start">
      <h1 class="title">The Ted Quiz</h1>
      <span>Select your difficulty 💃</span>
      <div class="difficulty-selector">
        <button class='btn-difficulty easy' @click="startNewQuiz('easy')">Easy</button>
        <button class='btn-difficulty medium' @click="startNewQuiz('medium')">Medium</button>
        <button class='btn-difficulty hard' @click="startNewQuiz('hard')">Hard</button>
      </div>
  </div>
</template>

<script>

export default {
  name: 'start',
  methods: {
    startNewQuiz (difficulty) {
      this.$store.commit('resetResults')
      this.$store.dispatch('fetchQuestions', { difficulty: difficulty })
      this.$router.push({ name: 'question', params: { id: '1' } })
    }
  }

}
</script>

<style scoped>
  .start {
    background-color: var(--background-color);
    border: 2px solid var(--black);
    width: 75%;
    margin: auto;
    padding: 1rem;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
  }

  h1 {
    max-width: 75%;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: var(--black);
    margin: auto auto 1rem auto;
    border-radius: var(--radius);
  }

   .difficulty-selector {
     padding: 1rem;
   }

   .btn-difficulty {
    min-width: 100px;
    margin: auto;
    padding: 0.5rem 1rem 0.5rem 1rem;
    border: none;
    border-radius: var(--radius);
    font-weight: 700;
    font-size: medium;
    margin-right: 1rem;
    background: white;
    box-shadow: var(--shadow);
    cursor: pointer;
    transition: 0.3s;
  }

  .btn-difficulty:hover {
    box-shadow: 4px 4px 0px var(--black);
  }

  .easy:hover {
    background: var(--green);
  }

  .medium:hover {
    background: var(--orange);
  }

  .hard:hover {
    background: var(--red);
  }
</style>
