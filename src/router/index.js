import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import Todo from "../views/Todo.vue";
import Suggestions from "../views/Suggestions.vue"
import ChoresNew from "../views/ChoresNew.vue"
import UserChoresNew from "../views/UserChoresNew.vue"
import UsersIndex from "../views/UserIndex.vue"

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: Home},
  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  { path: "/todo", name: "todo", component: Todo },
  { path: "/suggestions", name: "suggestions", component: Suggestions },
  { path: "/chores/new", name: "chores-new", component: ChoresNew },
  { path: "/user_chores/new", name: "user-chores-new", component: UserChoresNew},
  { path: "/users/", name: "users-index", component: UsersIndex},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
