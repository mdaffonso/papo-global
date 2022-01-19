import app from "../../config/firebase.js"
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  updateProfile, 
  signOut,
  onAuthStateChanged
} from "firebase/auth"

const auth = getAuth(app)

const errorTemplate = [
  "Firebase: Error (",
  ")."
]

const errorMessages = {
  "auth/email-already-exists": "O e-mail fornecido já está em uso por outro usuário.",
  "auth/email-already-in-use": "O e-mail fornecido já está em uso por outro usuário.",
  "auth/invalid-display-name": "O nome de usuário fornecido é inválido.",
  "auth/invalid-email": "O e-mail fornecido é inválido.",
  "auth/invalid-password": "A senha fornecida é inválida. Precisa ter pelo menos 6 caracteres.",
  "auth/user-not-found": "As credenciais fornecidas estão erradas.",
  "auth/wrong-password": "As credenciais fornecidas estão erradas."
}

const mappedErrors = Object.entries(errorMessages).map(object => ({ key: errorTemplate[0] + object[0] + errorTemplate[1], value: object[1] }))

export const createUser = async (email, password, username) => {

  let error = null
  let user = null

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    if (!res) {
      throw new Error()
    }

    await updateProfile(res.user, { displayName: username })
    user = res.user
  } catch (e) {
    const found = mappedErrors.find(object => object.key === e.message)
    if (found) {
      error = found.value
    } else {
      error = "Ocorreu um erro na sua requisição."
    }
  } finally {
    return { user, error }
  }
}

export const userSignIn = async (email, password) => {
  let error = null
  let user = null

  try {
    const res = await signInWithEmailAndPassword(auth, email, password)
    if (!res) {
      throw new Error()
    }

    user = res.user
  } catch (e) {
    const found = mappedErrors.find(object => object.key === e.message)
    if (found) {
      error = found.value
    } else {
      error = "Ocorreu um erro na sua requisição."
    }
  } finally {
    return { user, error }
  }
}

export const userLogOut = async () => {
  let error = null
  try {
    await signOut(auth)
  } catch (e) {
    error = "Ocorreu um erro na sua requisição."
  } finally {
    return { error }
  }
}

export const trackUserState = (cb) => {
  onAuthStateChanged(auth, user => {
    cb(user)
  })
}

export const getCurrentUser = () => {
  return auth.currentUser
}