<template>
  <div class="users-index">
    <h1>{{house.name}}</h1>
    <div class="start">
      <router-link to="/signup"><h2>Sign up</h2></router-link> |||| 
      <router-link to="/login"><h2>Log in</h2></router-link>
    </div>
    <h1>Housemates: </h1>
    <div v-for="user in house.users">
      <h2>{{ user.first_name }}</h2>
      <h3>Remaining Chores: </h3>
      <div v-for="chore in user.remaining_chores">
        <p>{{ chore.name }}</p>
      </div>
      <h3>Completed Chores: </h3>
      <div v-for="chore in user.completed_chores">
        <p>{{ chore.name }}</p>
      </div>
    </div> <!-- end of user in house.users -->

  </div>
</template>

<style>
</style>

<script>
import axios from "axios"

export default {
  data: function() {
    return {
      house: {}
    };
  },
  created: function() {
    axios
      .get("/api/houses/current")
      .then(response => {
        this.house = response.data;
      });
  },
  methods: {
  }
};
</script>