<template>
<div>
  <p class="error" v-if="error">{{ error }}</p>
  <form @submit.prevent="handleSubmit">
    <textarea maxlength="150" placeholder="Digite sua mensagem aqui..." v-model="message" @keydown.enter.prevent="handleSubmit"></textarea>
    <button>enviar</button>
  </form>
</div>
</template>

<script setup>
import { ref } from "vue"
import useCollection from "../composables/useCollection.js"
import getUser from "../composables/getUser.js"

const { error, addDoc } = useCollection("messages")
const message           = ref("")
const disabled          = ref(false)
const { user }          = getUser()

const handleSubmit = async () => {
  if (disabled.value || message.value.trim() === "") return

  disabled.value = true
  error.value = null

  await addDoc({
    message: message.value,
    user: user.value.displayName
  })
  if (!error.value) {
    message.value = ""
  }
  disabled.value = false
}
</script>

<style scoped>
div {
  width: 100%;
  margin: auto 0 0;
  background: white;
  box-shadow: 0 1rem 1rem 1rem rgba(14, 106, 226, 0.1);
}

form {
  display: grid;
  grid-template-columns: 1fr max-content;
}

textarea {
  background: none;
  width: 100%;
  border: none;
  border-top: 1px solid rgb(234, 234, 234);
  padding: 1rem;
  resize: none;
}

textarea:focus {
  outline: none;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  background: rgb(7, 184, 139);
  color: white;
  text-transform: uppercase;
}

button:active {
  transform: none;
}

.error {
  position: absolute;
  top: -4.5rem;
  left: 1rem;
  width: calc(100% - 2rem);
  background: crimson;
  color: white;
  border: none;
  padding: 1rem;
  z-index: 10;
  animation: 
    floatUp 300ms ease-in-out forwards,
    floatDown 300ms 2s ease-in-out forwards;
}

@keyframes floatUp {
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes floatDown {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(50%);
    opacity: 0;
  }
}
</style>