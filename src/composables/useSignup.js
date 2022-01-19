import { ref } from "vue"
import { createUser } from "../services/firebase/auth.js"

const error = ref(null)

const signup = async (email, password, username) => {
  error.value = null

  const res = await createUser(email, password, username)
  error.value = res.error

  return res
}

const useSignup = () => {
  return { error, signup }
}

export default useSignup