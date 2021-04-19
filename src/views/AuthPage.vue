<template>

  <div class="container text-center min-w-full min-h-screen flex flex-col justify-center items-center bg-yellow" >
    <header>
      <h1 class="inline-block text-7xl font-bold text-white mb-4 ">win<h1 class="transform -rotate-12 translate-y-0 inline-block">Q</h1>uest</h1>
    </header>
    <article id="login-page">
      <the-singin v-if="toggleForms"></the-singin>
      <the-singup v-if="!toggleForms"></the-singup>
      <a @click="changeForm" class="underline">
        {{ toggleForms ? "Register" : "Sing in" }}
      </a>
    </article>
  </div>
</template>

<script>
import TheSingin from "../components/auth/TheSingin.vue";
import TheSingup from "../components/auth/TheSingup.vue";
export default {
  components: {
    TheSingin,
    TheSingup,
  },
  data() {
    return {
      toggleForms: true,
    };
  },
  
  methods: {
    changeForm() {
      this.toggleForms = !this.toggleForms;
    },
  },
};
</script>

<style>
</style>