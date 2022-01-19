import { ref } from "vue"
import { userSignIn } from "../services/firebase/auth.js"

const error = ref(null)

const login = async (email, password) => {
  error.value = null

  const res = await userSignIn(email, password)
  error.value = res.error
  return res
}

const useLogin = () => {
  return { error, login }
}

export default useLogin