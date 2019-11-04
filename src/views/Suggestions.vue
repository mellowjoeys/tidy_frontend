<template>
  <div>
    <h1>Suggestions</h1>
    <div class="home">
      <router-link v-bind:to="'/todo'">
        <h2>To Do</h2>
      </router-link>
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