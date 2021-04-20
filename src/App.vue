<template>
  <div id="app" class="min-w-full min-h-screen bg-yellow overflow-hidden ">
    <transition name="appear">
      <router-view class="lg:w-5/12 lg:mx-auto"/>
    </transition>
  </div>
</template>
<script lang="ts">
export default {
  created() {
    this.$store.dispatch("stayLoggedin");
  },
};
</script>


<style>
html,
body {
  font-family: "Exo 2", sans-serif;
}
h1,
h2,
h3,
h4,
h5,
h6,
p,
span,
input,
button,
label,
a {
  font-family: "Exo 2", sans-serif;
}

.appear-enter-active, .appear-leave-active {
  transition: transform 0.5s;
}
.appear-enter-active {
  animation: appear 0.5s ease;
}
.appear-leave-active {
  animation: appear 0.5s ease reverse;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
