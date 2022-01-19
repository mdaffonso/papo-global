<template>
<div class="container box form-scaffold">
  <slot></slot>
</div>
</template>

<style>
.box {
  margin: auto;
}

.form-scaffold form {
  margin: 1rem;
  background: white;
  padding: 2rem;
  border-radius: 0.25rem;
  box-shadow: 2rem 2rem 2rem -1rem rgba(14, 106, 226, 0.1);
}

.form-scaffold p {
  font-size: 1rem;
  margin: 3rem 0 0;
}

.form-scaffold h1 {
  margin: 0 0 3rem;
  font-weight: 200;
  font-size: 1.5em;
}

@media (min-width: 700px) {
  .form-scaffold form {
    max-width: 40rem;
    padding: clamp(2rem, 7vw, 6rem);
  }
}
</style>