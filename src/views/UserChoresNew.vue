<template>
  <div class="user-chores-new">
    <h1>Tidy Time</h1>

    <div class="available-chores">
      <h3>Available</h3>
      <ul v-for="availableChore in availableChores">
        <p>{{ availableChore.name }}: {{ availableChore.value }}</p>
        <button v-on:click="createUserChore(availableChore)">Add</button>
      </ul>
    </div> <!-- available-chores end -->


    <div class="chosen-chores">
      <h3>Chosen</h3>
      <ul v-for="chosenChore in chosenChores">
        <p>{{ chosenChore.name }}</p>
      </ul>
    </div>

    <div class="housemate-names-values">
      <h3>Housemates</h3>
      <ul v-for="housemate in housemates">
        <p>
          {{ housemate.first_name }}: {{ housemate.value }} 
          <br> <!-- linebreak and housemate id line is only to identify housemate with same name in development -->
          id: {{ housemate.id }}
        </p>
      </ul>
    </div> <!-- housemate-names-values end -->

  </div> <!-- user-chores-new end -->
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
      start_of_week: ""
     };
  },
  created: function() {
    axios
      .get("/api/users/current")
      .then(response => {
        this.currentUser = response.data;
        axios
          .get("/api/users?house_id=" + this.currentUser.house_id)
          .then(response => {
            this.housemates = response.data;
            this.housemates.forEach(housemate => {
              housemate["value"] = 0;
            })
          });
      });
    axios
      .get("/api/chores?house=true")
      .then(response => {
        this.availableChores = response.data;
      });
    // axios // to define the start_of_week
    //   .
  },
  methods: {
    createUserChore: function(choreObject) {
      var params = {
        chore_id: choreObject.id,
        start_of_week: "November 3, 2019",
      }
      axios
        .post("/api/userchores", params)
        .then(response => {
          this.$router.push("/userchores/new");
        }); // unsure if app should go here again when creating userchore. 
    }
  }// make urls snakecase
};
</script>

