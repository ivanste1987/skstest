<template>
  <section>
    <form @submit.prevent="tryLogin">
      <div class="input-filed">
        <label for="email">Email</label>
        <input type="email" name="email" v-model="user.email" />
      </div>
      <div class="input-filed">
        <label for="password">Password</label>
        <input type="password" name="password" v-model="user.password" />
      </div>
      <transition>
        <div>
          <p style="color: red">{{ this.SetMessage }}</p>
        </div>
      </transition>
      <button type="submit">sing in</button>
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
      showError: false,
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters(["SetMessage"]),
  },
  methods: {
    async tryLogin() {
      this.isLoading = true;
      await this.$store.dispatch("tryLogin", this.user);
      this.isLoading = false;
      this.$router.replace("/home");
    },
  },
};
</script>

