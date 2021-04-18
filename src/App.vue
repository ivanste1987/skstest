<template>
  <div id="app">
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
</style>
