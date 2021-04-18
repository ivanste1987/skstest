<template>
  <section>
    <header>
      <h1>winQuest</h1>
      <button v-if="checkUser" @click="logoff">Logoff</button>
    </header>
    <post-list></post-list>
  </section>
</template>

<script>
import PostList from "../components/posts/PostList.vue";

export default {
  components: {
    PostList,
  },
  created() {
    this.$store.dispatch("stayLoggedin");
  },
   computed: {
    checkUser() {
      return this.$store.getters.CheckUser;
    },
  },
   methods: {
    logoff() {
      localStorage.removeItem("token");
      this.$router.replace("/");
      this.$store.commit("HANDLE_LOGIN", false);
    },
  },
  
};
</script>

<style>
</style>