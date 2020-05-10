<template>
  <div id="app">
    <div class="main-wrapper">
      <h1>主应用</h1>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view />
    </div>
    <div class="main-wrapper">
      <h1>子应用 1</h1>
      <div id="sub-app-container"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppComponent'
}
</script>
<style lang="scss">
#app {
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .main-wrapper {
    flex: 1;
  }
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
