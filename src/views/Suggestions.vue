<template>
  <div>
    <h1>Suggestions</h1>
    <div class="home">
      <div v-for="chore in house.chores">
        <h2 v-on:click="showChore(chore)">{{ chore.name }}</h2>
          <p>Value: {{ chore.value }}</p>
          </p>


        <div v-if="chore === currentChore">
          <p>My Suggested Value: 
          <input type="text" v-model="mySuggestedValue">
          <div v-for="suggestion in chore.suggestions">
            <h4>{{ suggestion }} </h4>
          </div>   
          <div class="edit-form-section">
            <h4>Suggest a value</h4>

            <div>
              Value: <input type="number" v-model="chore.value">
            </div>
              
            <button v-on:click="suggestValue(chore)">Suggest</button>
          </div><!-- end of .edit-form-section -->
        </div>


      </div>
      <router-link v-bind:to="'/todo'">
        <h2>To Do</h2>
      </router-link>
    </div>
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
      house: {},
      currentChore: {},
      mySuggestedValue: 0,
      newValue: 0
    };
  },
  created: function() {
    axios
      .get("/api/users/current")
      .then(response => {
        this.currentUser = response.data;
      axios.get("/api/houses/" + this.currentUser.house_id)
      .then(response => {
        this.house = response.data
      });
      })
  },
  methods: {
    showChore: function(choreObject) {
      if (this.currentChore != choreObject) {
        this.currentChore = choreObject;
        this.currentChore.suggestions.forEach(function(suggestion) {
          if (suggestion.user_id === this.currentUser.id) {
            this.mySuggestedValue = suggestion.value
          }
        });
      } else {
        this.currentChore = {};
        this.mySuggestedValue = 0;
      }
    }

    // suggestValue: function(choreObject) {
    //   //I want to update a value if mySuggestedValue is not 0. If it is, create a suggestion. 
    //   axios
    //     .post("")
    // }
  }
};
</script>