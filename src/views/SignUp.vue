<template>
<FormViewScaffold>
  <form @submit.prevent="handleSubmit">
    <h1>Cadastre-se no Papo Global para participar do chat mais badalado do Brasil!</h1>
    <InputGroup type="text" placeholder="nome de usuário" v-model="username" />
    <InputGroup type="email" placeholder="e-mail" v-model="email" />
    <InputGroup type="password" placeholder="senha" v-model="password" />
    <p class="error" :class="{ visible: error !== null }">{{ error }}</p>

    <Button variant="green" v-if="!loading">
      registrar-se
    </Button>
    <LoaderDots v-else />

    <p>Se você já tem uma conta, <router-link to="/login">clique aqui</router-link> para fazer o log in.</p>
  </form>
</FormViewScaffold>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import useSignup from "../composables/useSignup.js"
import FormViewScaffold from "../components/FormViewScaffold.vue"
import InputGroup from "../components/InputGroup.vue"
import Button from "../components/Button.vue"
import LoaderDots from "../components/LoaderDots.vue"

const username  = ref("")
const email     = ref("")
const password  = ref("")
const loading   = ref(false)
const router    = useRouter()

const { error, signup } = useSignup()

const handleSubmit = async () => {
  loading.value = true
  await signup(email.value, password.value, username.value)
  loading.value = false
  if(!error.value) {
    router.push("/")
  }
}

</script>

<style scoped>
.error {
  margin: 2rem 0;
  color: crimson;
  font-size: 1rem;
  display: none;
}

.visible {
  display: block;
}
</style>