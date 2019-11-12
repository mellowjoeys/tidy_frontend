<template>
  <div class="todo">
    <div>House: {{ house.name }}</div>
    <div>House id: {{ house.id }}</div>
    
    <div class="remaining-tasks">
      <h2>To-Do</h2>
      <div v-for="chore in house.current_user.remaining_chores">
        <ul>
          <li>{{ chore.name }}</li>
          <button v-on:click="completeChore(chore)">Complete</button>
        </ul>
      </div>
    </div> <!-- end of remaining-tasks -->
    <div class="completed-tasks">
      <h2>Completed</h2>
      <div v-for="chore in house.current_user.completed_chores">
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
    completeChore: function(chore) {
      var params = {
        chore_id: chore.id
      }
      axios
        .patch("/api/user_chores", params)
    }
  }
};
</script>

