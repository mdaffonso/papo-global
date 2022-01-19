<template>
<FormViewScaffold>
  <form @submit.prevent="handleSubmit">
    <h1>Digite seu e-mail e senha para acessar o Papo Global</h1>
    <InputGroup type="email" placeholder="e-mail" v-model="email" />
    <InputGroup type="password" placeholder="senha" v-model="password" />
    <p class="error" :class="{ visible: error !== null }">{{ error }}</p>

    <Button v-if="!loading" variant="green">fazer log in</Button>
    <LoaderDots v-else />

    <p>Não tem uma conta ainda? <router-link to="/signup">Clique aqui</router-link> para se cadastrar.</p>
  </form>
</FormViewScaffold>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import useLogin from "../composables/useLogin.js"
import FormViewScaffold from "../components/FormViewScaffold.vue"
import InputGroup from "../components/InputGroup.vue"
import Button from "../components/Button.vue"
import LoaderDots from "../components/LoaderDots.vue"

const email     = ref("")
const password  = ref("")
const loading   = ref(false)
const router    = useRouter()

const { error, login } = useLogin()

const handleSubmit = async () => {
  loading.value = true
  await login(email.value, password.value)
  loading.value = false
  if (!error.value) {
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