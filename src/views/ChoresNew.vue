<template>
  <div class="chore-new">
    <div class="suggest-chore">
      <h1> Suggest a Chore</h1>

      <form v-on:submit.prevent="submit()">
        
        <div class="form-group add-chore-group">
          <label>Chore Name:</label> 
          <input type="text" class="form-control add-chore-form" v-model="newName">
          <label>Value:</label> 
          <input type="number" class="form-control add-chore-form" v-model="newValue">
        </div>
        <input type="submit" value="Suggest">


      </form>
    </div>

  </div>
</template>

<style>
  .suggest-chore {
    background-image: url(https://images.unsplash.com/photo-1534551767192-78b8dd45b51b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
    padding-bottom: 300px;
    color: rgb(50,50,50);
    background-position: -470px -100px;
/*    text-shadow:
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000*/
  }

/*  .add-chore-group {
    wid
  }*/

  .add-chore-form {
   width: 300px;
   height: 25px;
   position: center;
   margin: auto;
   display: block;
  }



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
      }
      else {
        console.log("Please add a value greater than 0")
      };

    }
  }
};
</script>