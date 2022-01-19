<template>
  <nav>
    <div class="left" v-if="!user">
      <router-link to="/login">Fazer login</router-link>
    </div>
    <div class="left" v-else>
      <span>{{ user.displayName }}</span>
    </div>
    <div class="right">
      <button @click="handleLogout">
        <span class="material-icons">logout</span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import useLogout from "../composables/useLogout.js"
import getUser from "../composables/getUser.js"

const userError = ref(null)
const router    = useRouter()

const { error: logoutError, logout } = useLogout()
const { user } = getUser()

const handleLogout = async () => {
  await logout()
}
</script>


<style scoped>
nav {
  display: flex;
  align-items: center;
  padding: 1rem 2rem;

  background: white;
  box-shadow: 0 -1rem 1rem 1rem rgba(14, 106, 226, 0.1);

  z-index: 100;
}

a {
  color: rgb(0, 160, 139);
}

button {
  padding: 0.5rem 1rem;
  margin: -0.5rem 0;

  background: none;
  border: none;

  text-decoration: none;
  color: rgb(0, 160, 139);
}

.right {
  margin-left: auto;
  display: flex;
  align-items: center;
}
</style>