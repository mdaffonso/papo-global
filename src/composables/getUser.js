import { ref } from "vue"
import { trackUserState, getCurrentUser } from "../services/firebase/auth.js"

const user = ref(getCurrentUser())

trackUserState(_user => {
  user.value = _user
})

const getUser = () => {
  return { user }
}

export default getUser