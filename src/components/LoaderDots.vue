<template>
<div class="loader"></div>
</template>

<style scoped>
.loader,
.loader:before,
.loader:after {
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: load 1s infinite ease-in-out;
  animation: load 1s infinite ease-in-out;
}
.loader {
  color: rgb(7, 184, 139);
  margin: 0 0 0 2.5rem;
  position: relative;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.08s;
  animation-delay: -0.08s;
}
.loader:before,
.loader:after {
  content: '';
  position: absolute;
  top: 0;
}
.loader:before {
  left: -1.75rem;
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:after {
  left: 1.75rem;
}
@-webkit-keyframes load {
  0%,
  80%,
  100% {
    box-shadow: 0 1rem 0 -1.3rem;
  }
  40% {
    box-shadow: 0 1rem 0 0;
  }
}
@keyframes load {
  0%,
  80%,
  100% {
    box-shadow: 0 1rem 0 -1.3rem;
  }
  40% {
    box-shadow: 0 1rem 0 0;
  }
}
</style>