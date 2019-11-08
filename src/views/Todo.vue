<template>
  <div class="todo">
    <div>
      <router-link v-bind:to="'/suggestions/'">
        <h3>Suggestions</h3>
      </router-link>
    </div>
    <div>
      <router-link v-bind:to="'/user_chores/new'">
        <h3>Draft</h3>
      </router-link>
    </div>
    <div>
      <router-link v-bind:to="'/logout'">
        <h3>Logout</h3>
      </router-link>
    </div>
    <div class="remaining-tasks">
      <h2>To-Do</h2>
      <div v-for="chore in currentUser.remaining_chores">
        <ul>
          <li>{{ chore.name }}</li>
          <button v-on:click="completeChore(chore)">Complete</button>

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
        this.currentUser = response.data;

      });      
  },
  methods: {
    completeChore: function(chore) {
      var params = {
        chore_id: chore.id
      }
      axios
        .patch("/api/user_chores", params)
        .then(response => {
          axios
            .get("/api/users/current")
            .then(response => {
              this.currentUser = response.data;
            });
        });
    }
  }
};
</script>