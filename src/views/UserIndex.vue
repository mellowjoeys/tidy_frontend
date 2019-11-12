<template>
  <div class="users-index">
    <h1>{{house.name}}</h1>
    <p>House id: {{ house.id }}</p>

    <h1>Housemates: </h1>
    <div v-for="user in house.users">
      <div v-if="user.id !== house.current_user.id">
        <h2>{{ user.first_name }}</h2>
        <h3>Remaining Chores: </h3>
        <div v-for="chore in user.remaining_chores">
          
          <p>{{ chore.name }}</p>
          <button>Remind</button>
        </div>
        <h3>Completed Chores: </h3>
        <div v-for="chore in user.completed_chores">
          <p>{{ chore.name }}</p>
          <button>Cheer</button>

        </div>
      </div><!-- end of if statement -->
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