<template>
  <nav>
    <router-link to="/register">Register</router-link>
    <router-link to="/simple">Simple Form</router-link>
    <router-link to="/file">File Upload Form</router-link>
    <router-link to="/multilevel">Multi Level Form</router-link>
  </nav>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
