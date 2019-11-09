<template>
  <div class="user-chores-new">
    <div>
      {{housemates}}
      <router-link v-bind:to="'/todo/'">
        <h3>To-Do</h3>
      </router-link>
    </div>
    <div>
      <router-link v-bind:to="'/suggestions/'">
        <h3>Suggestions</h3>
      </router-link>
    </div>
    <h1>Tidy Draft</h1>
      <h2>Current Turn: {{ currentDrafter.first_name  }} </h2>
    <div class="available-chores">
      <h3>Available</h3>
      <ul v-for="availableChore in availableChores">
        <p>{{ availableChore.name }}: {{ availableChore.value }}</p>
        <div v-if="currentDrafter.id === currentUser.id">
          <button v-on:click="createUserChore(availableChore)">Add</button>
        </div>
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
      currentDrafter: {},
      myTurn: false
     };
  },
  created: function() {
    axios
      .get("/api/users/current")
      .then(response => {
        this.currentUser = response.data;
        this.updateChosenList(); 
        axios
          .get("/api/users?house_id=" + this.currentUser.house_id)
          .then(response => {
            this.housemates = response.data;
          })
          .then(this.whoseTurn);
        axios
          .get("/api/houses/" + this.currentUser.house_id) // house show action should show all users for a house, so we can get rid of .get("/api/users?house_id=" + this.currentUser.house_id)
          // 
          .then(response => {
            this.availableChores = response.data.unchosen_chores
          });
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
          axios
            .get("/api/users/current")
            .then(response => {

              this.currentUser = response.data;
              this.updateChosenList();
            });

          axios
            .get("/api/users?house_id=" + this.currentUser.house_id)
            .then(response => {
              this.housemates = response.data;
            })
            .then(this.whoseTurn);
          axios
            .get("/api/houses/" + this.currentUser.house_id) 
            .then(response => {
              this.availableChores = response.data.unchosen_chores
            });
            // .then(response => { 
            //   axios
            //     .get("/api/users?house_id=" + this.currentUser.house_id)
            //     .then(response => {
            //       this.housemates = response.data;
            //       this.housemates.forEach(housemate => {
            //         housemate["value"] = housemate.value_of_next_week_chores;
            //       })
            //     })
            // });
        })
        .then(whoseTurn());
    },
    updateChosenList: function() {
      this.chosenChores = this.currentUser.chosen_chores_next_week
    },
    whoseTurn: function() {
      this.currentDrafter = this.housemates[0];
      this.housemates.forEach(housemate => {
        if (housemate.value < this.currentDrafter.value) {
          this.currentDrafter = housemate;
        }
      });
    }
  }
};
</script>

