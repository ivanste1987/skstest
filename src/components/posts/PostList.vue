<template>
  <section>
    <div v-for="post in GetAllPosts" :key="post.id" class="lg:drop-shadow-2xl lg:shadow-2xl">
      <post :post="post" :userID="post.userId" class="bg-yellow border-b border-black"></post>
      <!-- napravi random prikaz postova ali da prvi bude user 1 -->
    </div>
  </section>
</template>

<script>
import Post from "./Post.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Post,
  },
  data() {
    return {
     user: {}
    };
  },
  mounted() {
    this.getAllPosts();
  },
  computed: {
    ...mapGetters(["GetAllPosts"]),
  },
  methods: {
    async getAllPosts() {
      await this.$store.dispatch("getAllPosts");
    },
  
  },
};
</script>

<style>
</style>