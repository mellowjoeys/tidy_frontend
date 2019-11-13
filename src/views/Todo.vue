<template>
  <div class="todo">
    <section class="container g-pt-20 g-pb-10">
      <div class="row" id="tasks">
        
        <div class="col-md-6 text-md-left g-mb-40">
          <div class="remaining-tasks">
            <h2 class="task-header">To-Do</h2>
            <div v-for="chore in house.current_user.remaining_chores">

              <div class="media g-mb-40">
                <div class="media-body mr-4">
                  <h3 class="h5 g-color-black g-font-weight-600 mb-20">{{ chore.name }}</h3>
                  <p class="g-color-gray-dark-v4">{{ chore.value }}</p>
                </div>
                <div class="d-flex">
                  <span v-on:click="completeChore(chore)" class="u-icon-v2 g-color-white g-bg-black rounded-circle">
                    <i class="fa fa-square-o"></i>
                  </span>
                </div>
              </div>
            </div>

          </div> <!-- end of remaining-tasks -->

        </div>

        <div class="col-md-6 text-md-right g-mb-40">
          <div class="completed-tasks">
            <h2 class="task-header">Completed</h2>
          <!-- Icon Blocks -->
            <div v-for="chore in house.current_user.completed_chores">

              <div class="media g-mb-40">
                <div class="d-flex mr-4">
                  <span class="u-icon-v2 g-color-white g-bg-black rounded-circle">
                    <i class="fa fa-check-square-o"></i>
                  </span>
                </div>
                <div class="media-body">
                  <h3 class="h5 g-color-black g-font-weight-600 mb-20">{{ chore.name }}</h3>
                  <p class="g-color-gray-dk-v4">{{ chore.value }}</p>
                </div>

              </div><!-- END OF ICON BLOCK -->

            </div>
          </div> <!-- end of completed tasks -->

        </div>
      </div><!-- end of row -->
    </section>
  </div>
</template>

<style>
  #tasks {
    background-color: rgba(220,220,220,.7);
  }

  .task-header {
    font-size: 400%;
  }

  .todo {
    background-image: url(https://images.unsplash.com/photo-1495195129352-aeb325a55b65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80);
    background-size: cover;
  }

/*.media-body {
  padding-right: 100px;
  color: red;
}*/
</style>

<script>
import axios from "axios"

export default {
  data: function() {
    return {
      house: {
        current_user: {
          remaining_chores: []
        }
      }
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
    completeChore: function(chore) {
      var params = {
        chore_id: chore.id
      }
      axios
        .patch("/api/user_chores", params)
        .then(response => {
          var index = this.house.current_user.remaining_chores.indexOf(chore);
          this.house.current_user.remaining_chores.splice(index, 1);

          this.house.current_user.completed_chores.push(chore);
        });
    }
  }
};
</script>

<!-- Photo by Sarah Dorweiler on Unsplash -->