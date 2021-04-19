<template>
  <div class="post w-screen px-6  py-4 shadow drop-shadow-2xl">
    <header class="title mb-2">
      <router-link :to="{ name: 'ThePostDescript', params: { id: post.id } }" class="text-3xl font-black">
        {{ post.title.charAt(0).toUpperCase() + post.title.slice(1) }}
      </router-link>
    </header>
    <article class="body">
      <p class="text-base leading-4">{{ post.body }}...</p>
    </article>
    <footer class="flex flex-row justify-between mt-5 mb-4">
      <div class="col flex flex-row items-center">
        <div class="time uppercase">{{ time | formatDate  }}AM</div>
      </div>
      <div class="col ">
        <figure class="flex flex-row items-center">
          <figcaption class="mr-2 font-black">{{ user.name }}</figcaption>
          <img src="https://via.placeholder.com/150" alt="usr_img" class="rounded-full w-9"/>
        </figure>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: {
    post: {
      type: Object,
      require: true,
    },
    userID: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {
      time: new Date().toISOString(),
      user: {}
    };
  },
  mounted(){
    this.getTheUser()
  },
  computed:{
    ...mapGetters(['GetUser'])
  },
  methods: {
    async getTheUser() {
      await this.$store.dispatch("getUser", this.userID);
      this.user = this.GetUser
    },
  },
};
</script>

<style>

</style>