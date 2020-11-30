<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
:root {
    --black: #1A1A1A;
    --background-color: #FBEDE6;
    --white: rgba(255, 255, 255, 0.9);
    --radius: 8px;
    --green: #00D792;
    --orange: #FF886C;
    --red: #FF004B;
    --shadow: 2px 2px 0px var(--black);
}

.button {
  border: 1px solid var(--black);
  border-radius: 4px;
  text-decoration: none;
  color: var(--black);
  background-color: white;
  padding: 0.5rem 1rem 0.5rem 1rem;
  margin: 1rem;
}

.button:hover {
  background-color: var(--black);
  color: white;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
