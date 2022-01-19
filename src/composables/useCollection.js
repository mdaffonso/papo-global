import { ref } from "vue"
import { createDoc } from "../services/firebase/firestore.js"

const useCollection = (collection) => {
  const error = ref(null)

  const addDoc = async (doc) => {
    const res = await createDoc(collection, doc)
    error.value = res.error
  }

  return { error, addDoc }
}

export default useCollection