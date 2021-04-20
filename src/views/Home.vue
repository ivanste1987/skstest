<template>
  <section class="w-screen min-h-full ">
    <header class="w-screen sticky top-0 z-10 bg-yellow lg:w-6/12 lg:mx-auto">
      <div class="px-6  py-4 shadow drop-shadow-2xl">
        <router-link to="/home">
          <h1 class="text-4xl text-white font-bold">
            win<span class="transform -rotate-12 translate-y-0 inline-block"
              >Q</span
            >uest
          </h1>
        </router-link>
      </div>
      <div class="px-6  py-4 shadow drop-shadow-2xl">
        <button v-if="checkUser" @click="logoff">Sing out</button>
      </div>
    </header>
    <post-list class="mt-0"></post-list>
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