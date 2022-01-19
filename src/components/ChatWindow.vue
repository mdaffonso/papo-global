<template>
<div class="box" ref="messages">
  <p v-if="error" class="error">{{ error }}</p>
  <div v-else-if="documents" class="messages">
    <ChatMessage 
      v-for="document in formattedDocuments" 
      :key="document.id" 
      :user="document.user" 
      :timestamp="document.timestamp" 
      :message="document.message" />
  </div>
</div>
</template>

<script setup>
import { computed, ref, onUpdated } from "vue"
import getCollection from "../composables/getCollection.js"
import ChatMessage from "./ChatMessage.vue"
import { formatDistanceToNow} from "date-fns"
import { ptBR } from "date-fns/locale"

const { error, documents } = getCollection("messages")
const formattedDocuments = computed(() => {
  if (documents?.value) {
    return documents.value.map(doc => {
      const time = formatDistanceToNow(doc.timestamp.toDate(), { locale: ptBR })
      return { ...doc, timestamp: time }
    })
  }
})

const messages = ref(null)
onUpdated(() => {
  messages.value.scrollTop = messages.value.scrollHeight
})
</script>

<style scoped>
.box {
  overflow-y: scroll;
  width: 100%;
  height: 100%;
}

.messages {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100%;
}

.error {
  padding: 2rem;
  font-style: italic;
  color: rgb(150, 150, 150);
}

@media (min-width: 700px) {
  .messages {
    padding: 2rem;
  }
}
</style>