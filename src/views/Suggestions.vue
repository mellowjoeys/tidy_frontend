<template>
  <div>
    <h1>Suggestions</h1>
    <div class="home">
      <div v-for="chore in house.chores">
        <h2>{{ chore.name }}</h2>
          
        <div v-for="suggestion in chore.suggestions">
          <h4>{{ suggestion }} </h4>

        </div>
      </div>
      <router-link v-bind:to="'/todo'">
        <h2>To Do</h2>

      </router-link>
    </div>
    <div>
      {{ currentUser.house_id }}
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
      currentUser: {},
      house: [],
      suggestions: []
    };
  },
  created: function() {
    axios
      .get("/api/users/current")
      .then(response => {
        this.currentUser = response.data;
      axios.get("/api/houses/" + this.currentUser.house_id)
      .then(response => {
        this.house = response.data
      });
      })
  },
  methods: {
  }
};
</script>