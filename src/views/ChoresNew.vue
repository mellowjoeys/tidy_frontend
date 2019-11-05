<template>
  <div class="chore-new">
    <h1> Suggest a Chore</h1>

    <form v-on:submit.prevent="submit()">
      
      <div class="form-group">
        <label>Chore Name:</label> 
        <input type="text" class="form-control" v-model="newName">
      </div>
      <div class="form-group">
        <label>Value:</label> 
        <input type="number" class="form-control" v-model="newValue">
      </div>
      <input type="submit" value="Suggest">


    </form>


  </div>
</template>

<style>
</style>

<script>
import axios from "axios"

export default {
  data: function() {
    return {
      newName: "",
      newValue: 0
    };
  },
  created: function() {},
  methods: {
    submit: function () {
      var params = {
        name: this.newName,
        value: this.newValue
      };
      if (params.value > 0) {
        console.log(params)
        axios
          .post("/api/chores", params)
          .then(response => {
            console.log("success", response.data);
            this.$router.push("/suggestions")
          });
      };

    }
  }
};
</script>