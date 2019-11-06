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
      house: {}
     };
  },
  created: function() {
    axios
      .get("/api/users/current")
      .then(response => {
        this.currentUser = response.data;
        updateChosenList(); // test if this line works. 
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
  },
  methods: {
    createUserChore: function(choreObject) {
      var params = {
        chore_id: choreObject.id,
      }
      axios
        .post("/api/user_chores", params)
        .then(response => {
          this.$router.push("/user_chores/new"); // this will not "reload" the page. find another solution.
        }); // 
      axios
        .get("/api/houses" + this.currentUser.house_id)
        .then(response => {
          this.house = response.data
        });
    },
    updateChosenList: function() {
      this.chosenChores = this.currentUser.chores_next_week
    }
  }// make urls snakecase
};
</script>

