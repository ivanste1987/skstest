<template>
  <div class="auth-content">
    <header>
      <h1>WinQuest</h1>
    </header>
    <article id="login-page">
      <the-singin v-if="toggleForms"></the-singin>
      <the-singup v-if="!toggleForms"></the-singup>
      <a @click="changeForm">
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