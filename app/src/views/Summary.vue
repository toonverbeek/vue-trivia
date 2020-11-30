<template>
  <div class="summary">
    <h2>Your score is:</h2>
    <h1>{{ this.$store.getters.totalScore }} / {{ this.$store.state.questions.length }}</h1>
    <router-link to="/">Restart</router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .summary {
    border: 1px solid var(--black);
    background-color: var(--background-color);
    padding: 1rem;
    border-radius: 4px;
    box-shadow: var(--shadow);
  }

  h1 {
    border: 1px solid var(#fafafa);
    box-shadow: var(--shadow);
    background-color: white;
    width: 5rem;
    margin: auto;
    padding: 1rem 0.5rem 1rem 0.5rem;
    border-radius: 4px;
    margin-bottom: 1rem;
  }
</style>
