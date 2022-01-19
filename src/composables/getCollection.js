import { ref, watchEffect } from "vue"
import { snapshot } from "../services/firebase/firestore.js"

const getCollection = (collection) => {
  const documents = ref(null)
  const error     = ref(null)

  const unsub = snapshot(
    collection, 
    
    snap => {
      const results = []
      snap.forEach(doc => {
        doc.data().timestamp && results.push({ ...doc.data(), id: doc.id })
      })
      documents.value = results
      error.value = null
    },

    e => {
      error.value = "Ocorreu um erro ao buscar as mensagens... :("
    }
  )

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub())
  })

  return { documents, error }
}

export default getCollection