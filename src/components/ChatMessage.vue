<template>
  <p v-if="user" :class="{ right: user.displayName === props.user }">
    <span class="head">
      <small>{{props.timestamp}}</small>
    </span>
    <span class="body">
      <strong>{{formattedUser}}:</strong>
      {{props.message}}
    </span>
  </p>
</template>

<script setup>
import { defineProps, computed } from "vue"
import getUser from "../composables/getUser.js"

const { user } = getUser()

const formattedUser = computed(() => {
  if (user.value.displayName === props.user) {
    return "Você"
  }
  return props.user
})

const props = defineProps({
  timestamp: String,
  user: String,
  message: String
})
</script>

<style scoped>
p {
  display: flex;
  flex-direction: column;
  margin: 0.25rem 0;
  background: white;
  padding: 1rem;
  border-radius: 0.75rem 0.75rem 0.75rem 0;
  width: max-content;
  max-width: 100%;
  box-shadow: 1rem 1rem 2rem -1rem rgb(206, 206, 206);
}

span {
  display: block;
}

small {
  color: rgb(156, 156, 156);
  font-size: 0.7em;
}

.body {
  display: flex;
  gap: 0.5rem;
}

.right {
  margin-left: auto;
  background: rgb(13, 84, 84);
  color: white;
  border-radius: 0.75rem 0.75rem 0 0.75rem;
}

.right small {
  color: rgb(200, 200, 200);
}
</style>