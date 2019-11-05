<template>
  <div class="user-chores-new">
    <h1>Tidy Time</h1>

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
      availableChores: [], // user can refresh and see updated list, then use action cables to auto refresh. 
      chosenChores: [],
      housemates: [],
      housematesValues: []
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
  }
};
</script>