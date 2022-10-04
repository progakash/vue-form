<template>
    <ul>
        <!-- <li><router-link to="/switch-page">My Switch</router-link></li> -->
        <li><router-link to="/register">Register</router-link></li>
        <li><router-link to="/simple">Simple Form</router-link></li>
        <li><router-link to="/file">My Switch</router-link></li>
        <li><router-link to="/multilevel">Multi Level Form</router-link></li>
    </ul>
    <router-view/>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}
</style>