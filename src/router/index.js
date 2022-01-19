import { getCurrentUser } from "../services/firebase/auth.js"
import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import SignUp from "../views/SignUp.vue"
import LogIn from "../views/LogIn.vue"
import NotFound from "../views/NotFound.vue"

const requireAuth = (to, from, next) => {
  const user = getCurrentUser()
  if (!user) {
    return next({ name: "SignUp" })
  }
  next()
}

const requireNoAuth = (to, from, next) => {
  const user = getCurrentUser()
  if (user) {
    return next({ name: "Home" })
  }
  next()
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: requireAuth
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
    beforeEnter: requireNoAuth
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogIn,
    beforeEnter: requireNoAuth
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
