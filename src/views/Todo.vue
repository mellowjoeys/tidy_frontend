<template>
  <div class="todo">
    <h1>  </h1>
    <div class="start">
    </div>
    <div class="remaining-tasks">
      <h2>To-do</h2>
      <div v-for="remainingChore in remainingChores">
        <h2>{{ remainingChore.name }}</h2>
      </div>
    </div> <!-- end of remaining-tasks -->
    <div class="completed-tasks">
      <div v-for="completedChore in completedChores">
        <h2>{{ completedChore.name }}</h2>
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
      currentUser: {},
      remainingChores: [],
      completedChores: []
    };
  },
  created: function() {
    axios
      .get("/api/users/current")
      .then(response => {
        this.currentUser = response.data
      })
      .then(this.remainingChores =  this.currentUser.remaining_chores)
      .then(this.completedChores = this.currentUser.completed_chores);
  },
  methods: {
  }
};
</script>