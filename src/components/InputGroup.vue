<template>
  <div>
    <input :type="type" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" placeholder=" ">
    <label>{{ placeholder }}</label>
  </div>
</template>

<script setup>
import { defineProps } from "vue"

const props = defineProps({
  type: String,
  placeholder: String,
  modelValue: {
    type: String,
    default: "",
    required: true
  }
})

</script>

<style scoped>
div {
  margin: 0.5rem 0;
  width: 100%;
}

label {
  position: absolute;
  top: 50%;
  left: 1rem;

  padding: 0 0.5em;

  content: attr(data-placeholder);
  font-size: 0.95rem;

  z-index: 10;

  pointer-events: none;

  transform: translateY(-50%);
  transform-origin: left center;

  transition: 100ms ease-in-out;
  transition-property: transform;

  background-color: white;
}

input {
  background: white;
  color: black;
  border: 1px solid rgb(226, 226, 226);
  padding: 1em;
  border-radius: 0.25rem;

  width: 100%;
}

input:not(:placeholder-shown):not([value=""]) {
  border-color: rgb(17, 187, 218);
}

input:invalid {
  border-color: red !important;
}

input:not(:placeholder-shown) + label,
input:focus + label {
  transform: scale(0.75) translate(-0.5rem, -225%);
}
</style>