<template>
  <div class="users-index">
    <section class="users-index-content pt-5">
      <h1 class="house-name text-md-left">{{house.name}}</h1>
    
      <div v-for="user in house.users">
        <div v-if="user.id !== house.current_user.id">
          <h2 class="housemate-name">{{ user.first_name }}</h2>
          <section class="container g-pb-10 housemate-chores pt-5">
            <div class="row" id="chore-box">

              <div class="col-md-6 text-md-right g-mb-40">

                <h3>Remaining Chores: </h3>
                <div v-for="chore in user.remaining_chores">
                  
                  <p v-on:click="toggleButton(chore)">{{ chore.name }}</p>
                  <div v-if="chore === currentChore">
                    <button>Remind</button>
                  </div>
                </div>
              </div>
              <div class="col-md-6 text-md-left g-mb-40">

                <h3>Completed Chores: </h3>
                <div v-for="chore in user.completed_chores">
                  <p v-on:click="toggleButton(chore)">{{ chore.name }}</p>
                  <div v-if="chore === currentChore">
                    <button>Cheer</button>
                  </div>

                </div>
              </div>
            </div>
          </section>
        </div><!-- end of if statement -->
      </div> <!-- end of user in house.users -->
    </section>
  </div>
</template>

<style>
.users-index {
  color: black;
}
</style>

<script>
import axios from "axios"

export default {
  data: function() {
    return {
      house: {},
      currentChore: {}
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
    toggleButton: function(choreObject) {
      if (this.currentChore != choreObject) {
        this.currentChore = choreObject;
      }
      else {
        this.currentChore = {};
      }
    }
  }
};
</script>