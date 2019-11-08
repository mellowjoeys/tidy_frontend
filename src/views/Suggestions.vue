<template>
  <div class="suggestions">
      <router-link v-bind:to="'/todo'">
        <h2>To Do</h2>
      </router-link>
      <router-link v-bind:to="'/chores/new'">
        <h2>Suggest Chore</h2>
      </router-link>
    <h1>Suggestions</h1>
    <div class="home">
      <div v-for="chore in house.unapproved_chores">
        <h2 v-on:click="showChore(chore)"> 
          <div> {{ chore.name }} </div>
        </h2>

        <div v-if="chore === currentChore">
          <div v-for="suggestion in chore.suggestions">
            <p>{{ suggestion.belongs_to.user.first_name}} suggests:</p>
            <p>{{ suggestion.value }} </p>
          </div>   
          <div class="edit-form-section">
            <h4>Suggest a value</h4>
            <div>
              Value: <input type="number" v-model="newSuggestedValue">
            </div>
            <button v-on:click="suggestValue(chore)">Suggest</button>
          </div><!-- end of .edit-form-section -->
        </div>


      </div>
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
      previousValue: 0,
      newSuggestedValue: 0,
      currentSuggestionId: 0
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
      this.previousValue = 0;
      this.newSuggestedValue = 0;
      if (this.currentChore != choreObject) {
        this.currentChore = choreObject;
        this.currentChore.suggestions.forEach((suggestion) => {
          if (suggestion.user_id === this.currentUser.id) {
            this.previousValue = suggestion.value;
            this.currentSuggestionId = suggestion.id;

          }
        });
      } else {
        this.currentChore = {};
        this.previousValue = 0;
        this.currentSuggestionId = 0;
      }
    },

    suggestValue: function(choreObject) {
      if (this.previousValue > 0 && this.newSuggestedValue > 0) {
        var params = {
          id: this.currentSuggestionId,
          chore_id: choreObject.id,
          value: this.newSuggestedValue
        };
        axios
          .patch("/api/suggestions/" + this.currentSuggestionId, params)
          .then(response => {
            this.newSuggestedValue = 0;
            console.log("Suggestion successfully edited");
            axios.get("/api/houses/" + this.currentUser.house_id)
            .then(response => {
              this.house = response.data
            });
          });
      }
      else if (this.previousValue === 0 && this.newSuggestedValue > 0) {
        var params = {
          chore_id: choreObject.id,
          value: this.newSuggestedValue
        };
        axios
          .post("/api/suggestions/", params)
          .then(response => {
            console.log("Suggestion successfully added");
          });
      }
      else {
        console.log("Please enter a value greater than 0.");

      }
    }
  }
};
</script>
