<template>
  <div class="user-chores-new">
    <h1>Tidy Draft</h1>
      <h2>Current Turn: {{ currentDrafter.first_name  }} {{ currentDrafter.last_name }} </h2>
      <section class="container g-pb-10 all-chores">
        <div class="row">
          <div class="col-md-4 text-md-left">        
            <div class="available-chores">
              <h3>Available</h3>
              <div v-for="availableChore in availableChores">
                <p>{{ availableChore.name }}: {{ availableChore.value }}</p>
                <div id="button" v-if="currentDrafter.id === currentUser.id">
                  <button v-on:click="createUserChore(availableChore)">Add</button>
                </div>
              </div>
            </div> <!-- available-chores end -->
          </div>
          <div class="col-md-4 text-md-center">        

            <div class="housemate-names-values">
              <h3>Housemates</h3>
              <ul v-for="housemate in housemates">
                <p>
                  {{ housemate.first_name }} {{ housemate.last_name }}: {{ housemate.next_week_net_value }} 
                  <br>
                </p>
              </ul>
            </div>
          </div>

          <div class="col-md-4 text-md-right g-mb-40">

            <div class="chosen-chores">
              <h3>Chosen</h3>
              <ul v-for="chosenChore in chosenChores">
                <p>{{ chosenChore.name }}</p>
              </ul>
            </div>
          </div>
        </div>
      </section>
  </div> <!-- user-chores-new end -->
</template>
  
<style>
  #button {
    padding-bottom: 20px;
  }

  .user-chores-new {
    background-image: url(https://images.unsplash.com/photo-1544446637-516d7e182a5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80);
    background-size: cover;
    background-position: -20px -150px;
    color: white;
    text-shadow:
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000
  }

  .row {
    padding-bottom: 250px;
  }

  .all-chores{
    background-color: rgba(100,100,100, .9);  
    padding-left: 200px;
    padding-right: 200px;
    padding-top: 10px;
  }
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
      currentDrafter: {}
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
        chore_id: choreObject.id
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
            .then(this.whoseTurn());
          axios
            .get("/api/houses/" + this.currentUser.house_id) 
            .then(response => {
              this.availableChores = response.data.unchosen_chores
            });
        })
        .then(this.whoseTurn());
    },
    updateChosenList: function() {
      this.chosenChores = this.currentUser.chosen_chores_next_week;
    },
    whoseTurn: function() {
      this.currentDrafter = this.housemates[0];
      this.housemates.forEach(housemate => {
        if (housemate.next_week_net_value < this.currentDrafter.next_week_net_value) {
          this.currentDrafter = housemate;
        }
      });
    }
  }
};
</script>

