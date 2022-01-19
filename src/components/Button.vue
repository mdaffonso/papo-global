<template>
  <button :class="variants">
    <slot></slot>
  </button>
</template>

<script setup>

import { defineProps } from "vue"

const props = defineProps({
  variant: String
})

const variants = {
  "green": props.variant === "green",
  "red": props.variant === "red"
}
</script>


<style scoped>
button {
  --background-color: rgb(233, 233, 233);
  --focus-background: rgb(240, 240, 240);
  --focus-outline: rgb(245, 245, 245);
  --text-color: black;

  border-radius: 100rem;
  border: none;
  background: var(--background-color);
  color: var(--text-color);
  padding: 1em 2em;
  text-transform: uppercase;

  transition: 150ms ease-in-out;
  transition-property: color, background-color, box-shadow;
}

button:focus {
  background: var(--focus-background);
  box-shadow: 0 0 0 0.25em var(--focus-outline);
  outline: none;
}

.green {
  --background-color: rgb(7, 184, 139);
  --focus-background: rgb(0, 207, 155);
  --focus-outline: rgb(7, 184, 139, 0.4);
  --text-color: white;
}

</style>