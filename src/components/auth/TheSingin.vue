<template>
  <section class="container mx-auto max-w-xs text-center">
    <form @submit.prevent="tryLogin" class="p-2">
      <div class="input-filed flex justify-center items-baseline">
        <label for="email" class="text-sm mr-2 self-end">Username</label>
        <input
          type="email"
          name="email"
          v-model="user.email"
          @focus="removeMsg"
          class="text-xl border-b rounded-none border-black bg-transparent outline-none font-bold pl-2 mb-1"
        />
      </div>
      <div class="input-filed flex justify-center items-baseline">
        <label for="password" class="text-sm mr-2 self-end">Password</label>
        <input
          type="password"
          name="password"
          v-model="user.password"
          @focus="removeMsg"
          class="text-xl border-b rounded-none border-black bg-transparent outline-none self-start font-bold pl-2 mb-1"
        />
      </div>
      <transition>
        <div>
          <p style="color: red" class="my-5">{{ this.SetSinginMsg }}</p>
        </div>
      </transition>
      <button type="submit" class="text-xl font-bold my-10 bg-white px-6 py-2">
        sing in
      </button>
    </form>
    <base-spinner v-if="isLoading"></base-spinner>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import BaseSpinner from "../UI/BaseSpinner.vue";
export default {
  components: {
    BaseSpinner,
  },
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters(["SetSinginMsg", "CheckUser"]),
  },
  methods: {
    async tryLogin() {
      try {
        this.isLoading = true;
        await this.$store.dispatch("tryLogin", this.user);
        this.isLoading = false;
        if (this.CheckUser) {
          this.$router.push("/home");
        }
      } catch (error) {
        this.anError = true; 
        this.isLoading = false;
      }
    },
    removeMsg(){
      this.$store.state.singinMsg = ""
    }
  },
};
</script>

