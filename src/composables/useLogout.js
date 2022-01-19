import { ref } from "vue"
import { userLogOut } from "../services/firebase/auth.js"

const error = ref(null)

const logout = async () => {
  const res = await userLogOut()
  error.value = res.error
}

const useLogout = () => {
  return { logout, error }
}

export default useLogout