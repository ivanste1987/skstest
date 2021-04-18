<template>
  <section class="post-content">
    <header>
      <div class="time">
        <div class="time">{{ time | formatDate  }}AM</div>
      </div>
      <div class="user">
        <img src="https://www.placecage.com/200/200" alt="usr_avatar" />
        <h2 @click="openUserModal">{{ user.username }}</h2>
      </div>
    </header>
    <article>
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </article>
    <footer class="comments">
      <h2>Comments</h2>
      <article v-for="comment in comments" :key="comment.id" class="comment">
        <figure>
          <img src="https://www.placecage.com/200/200" alt="" />
        </figure>
        <div>
          <p>
            <span>{{ comment.email.split("@")[0] }}</span> commented on  <span class="time">{{ time | formatDate  }}AM</span>
          </p>
        </div>
        <article>
          <p>{{ comment.body }}</p>
        </article>
      </article>
    </footer>
    <section class="user-modal" v-if="openModal">
      <div class="close-section">
        <h3 class="logo">winQuest</h3>
        <button class="close-modal" @click="openUserModal">
          <i class="fas fa-times fa-lg"></i>
        </button>
      </div>
      <the-user :user="user" :posts="userPosts"></the-user>
    </section>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import TheUser from "../user/TheUser.vue";
export default {
  components: { TheUser },
  data() {
    return {
      post: {},
      comments: [],
      user: {},
      openModal: false,
      userPosts: [],
      time: new Date().toISOString()
    };
  },
  mounted() {
    this.getPosts();
    this.getComments();
    this.findPostForUser();
  },
  computed: {
    ...mapGetters(["GetAllPosts", "GetComments", "GetUser"]),
  },
  methods: {
    async getPosts() {
      await this.$store.dispatch("getAllPosts");
      let postById = this.GetAllPosts.find(
        (post) => post.id == this.$route.params.id
      );
      this.post = postById;
      this.getTheUser(this.post.userId);
    },
    async getComments() {
      await this.$store.dispatch("getAllComments", this.$route.params.id);
      this.comments = this.GetComments;
    },
    async getTheUser(id) {
      await this.$store.dispatch("getUser", id);
      this.user = this.GetUser;
      this.findPostForUser(this.user.id);
    },
    openUserModal() {
      this.openModal = !this.openModal;
    },
    findPostForUser(id) {
      const posts = this.GetAllPosts.filter((element) => element.userId == id);
      posts.length = 3;
      this.userPosts = posts;
    },
  },
};
</script>

<style>
</style>