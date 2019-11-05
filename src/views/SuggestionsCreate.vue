<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div class="start">
      <router-link to="/signup"><h2>Sign up</h2></router-link> |||| 
      <router-link to="/login"><h2>Log in</h2></router-link> ||||
      <router-link to="/todo"><h2>To Do</h2></router-link> ||||

    </div>

  </div>
</template>

<style>
</style>

<script>
import axios from "axios"

export default {
  data: function() {
    return {
      message: "TIDY"
    };
  },
  created: function() {},
  methods: {
  }
};
</script>