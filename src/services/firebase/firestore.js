import app from "../../config/firebase.js"
import { serverTimestamp, getFirestore, collection, addDoc, onSnapshot, query, orderBy, limit } from "firebase/firestore"

const firestore = getFirestore(app)

export const createDoc = async (c, doc) => {
  let error = null
  let data = null

  try {
    const docRef = await addDoc(collection(firestore, c), {
      ...doc,
      timestamp: serverTimestamp()
    })
    data = docRef
  } catch (e) {
    error = "Ocorreu um erro na sua solicitação. Tente novamente em alguns segundos..."
  } finally {
    return { data, error }
  }
}

export const snapshot = (c, cb, e) => {
  const q = query(collection(firestore, c), orderBy("timestamp"), limit(300))
  return onSnapshot(q, doc => {
    cb(doc)
  }, e)
}