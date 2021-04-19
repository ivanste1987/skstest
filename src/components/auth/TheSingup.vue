<template>
  <section class="container mx-auto text-center">
    <form @submit.prevent="trySingup" class="p-2">
     
      <div class="input-filed flex justify-end items-baseline">
        <label for="email" class="text-sm mr-2 self-end">Email</label>
        <input type="email" required v-model="user.email" class="text-xl border-b border-black rounded-none bg-transparent  outline-none font-bold self-start font-bold pl-2 mb-1"/>
      </div>
      <div class="input-filed flex justify-end items-baseline">
        <label for="password" class="text-sm mr-2 self-end">Password</label>
        <input type="password" required v-model="user.password" class="text-xl border-b border-black rounded-none bg-transparent  outline-none font-bold self-start font-bold pl-2 mb-1"/>
      </div>
      <div class="input-filed flex justify-end items-baseline">
        <label for="username" class="text-sm mr-2 self-end">Username</label>
        <input type="text" name="username" required v-model="user.name" class="text-xl border-b border-black rounded-none bg-transparent  outline-none font-bold self-start font-bold pl-2 mb-1"/>
      </div>
      <button type="submit" class="text-xl font-bold my-10 bg-white px-6 py-2">sing up</button>
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