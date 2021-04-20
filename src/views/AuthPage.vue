<template>
  <div
    class="container text-center min-w-full min-h-screen flex flex-col justify-center items-center bg-yellow"
  >
    <header>
      <h1 class="text-7xl text-white font-bold">
            win<span class="transform -rotate-12 translate-y-0 inline-block"
              >Q</span
            >uest
          </h1>
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