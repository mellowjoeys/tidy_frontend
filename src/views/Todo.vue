<template>
  <div class="todo">
    <h1>  </h1>
    <div class="nav">
      <router-link v-bind:to="'/suggestions/'">
        <h3>Suggestions</h3>
      </router-link>
    </div> <!-- end of nav bar -->
    <div class="remaining-tasks">
      <h2>To-do</h2>
      <div v-for="chore in currentUser.remaining_chores">
        <ul>
          <li>{{ chore.name }}</li>
        </ul>
      </div>
    </div> <!-- end of remaining-tasks -->
    <div class="completed-tasks">
      <h2>Completed</h2>
      <div v-for="chore in currentUser.completed_chores">
        <ul>
          <li>{{ chore.name }}</li>
        </ul>
      </div>
    </div> <!-- end of completed-tasks -->
  </div>
</template>

<style>
</style>

<script>
import axios from "axios"

export default {
  data: function() {
    return {
      currentUser: {}
    };
  },
  created: function() {
    axios
      .get("/api/users/current")
      .then(response => {
        console.log(response.data)
        this.currentUser = response.data;
      });      
      // .then(this.remainingChores =  this.currentUser[:remaining_chores];
      // .then(this.completedChores = this.currentUser[:completed_chores];
  },
  methods: {}
};
</script>