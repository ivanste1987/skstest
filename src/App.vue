<template>
  <div id="app" class="min-w-full min-h-screen">
    <router-view />
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
button {
  font-family: "Exo 2", sans-serif;
}
</style>
