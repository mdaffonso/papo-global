<template>
<div class="body">
  <Navbar />
  <ChatWindow />
  <MessageComposer />
</div>
</template>

<script setup>
import { watch } from "vue"
import { useRouter } from "vue-router"
import getUser from "../composables/getUser.js"
import Navbar from "../components/Navbar.vue"
import ChatWindow from "../components/ChatWindow.vue"
import MessageComposer from "../components/MessageComposer.vue"

const { user }  = getUser()
const router    = useRouter()

watch(user, () => {
  if (!user.value) {
    router.push("/signup")
  }
})

</script>
<style scoped>
.body {
  height: 100vh;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
}
</style>