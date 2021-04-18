<template>
  <section>
    <form @submit.prevent="trySingup">
     
      <div class="input-filed">
        <label for="email">Email</label>
        <input type="email" required v-model="user.email" />
      </div>
      <div class="input-filed">
        <label for="password">Password</label>
        <input type="password" required v-model="user.password" />
      </div>
      <div class="input-filed">
        <label for="username">Username</label>
        <input type="text" name="username" required v-model="user.name" />
      </div>
      <button type="submit">Singup</button>
    </form>

    <transition>
      <handle-error :class="close ? 'show' : ''">
        <p>{{ this.SetMessage }}</p>
        <button @click="closeModal" class="close-btn">
          <i class="fas fa-times-circle fa-lg"></i>
        </button>
      </handle-error>
    </transition>
    <base-spinner v-if="isLoading"></base-spinner>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import BaseSpinner from "../UI/BaseSpinner.vue";
import HandleError from "../UI/HandleError.vue";
export default {
  components: {
    HandleError,
    BaseSpinner,
  },
  data() {
    return {
      user: {
        email: null,
        password: null,
        name: null,
      },
      close: false,
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters(["SetMessage"]),
  },
  methods: {
    async trySingup() {
      try {
        this.isLoading = true;
        await this.$store.dispatch("trySingup", this.user);
        this.isLoading = false;
        this.close = true;
      } catch (error) {
        this.close = true;
        this.isLoading = false;
      }
    },
    closeModal() {
      this.close = false;
    },
  },
};
</script>

<style>
</style>