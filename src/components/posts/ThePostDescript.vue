<template>
  <section class="post-content relative lg:drop-shadow-2xl lg:shadow-2xl">
    <header class="sticky top-0 z-10 bg-yellow">
      <div class="px-6 py-4 shadow drop-shadow-2xl">
        <router-link to="/home">
          <h1 class="text-4xl text-white font-bold">
            win<span class="transform -rotate-12 translate-y-0 inline-block"
              >Q</span
            >uest
          </h1>
        </router-link>
      </div>
      <div
        class="post flex flex-row justify-between px-6 py-3 shadow drop-shadow-2xl"
      >
        <div class="col flex flex-row items-center">
          <div class="time uppercase">{{ time | formatDate }}AM</div>
        </div>
        <div class="col">
          <figure class="flex flex-row items-center" @click="openUserModal" style="cursor: pointer;">
            <figcaption class="mr-2 font-black">{{ user.name }}</figcaption>
            <img
              src="https://via.placeholder.com/150"
              alt="usr_img"
              class="rounded-full w-11"
            />
          </figure>
        </div>
      </div>
    </header>
    <article
      class="px-6 py-4 bg-yellow border-b border-gray-900 lg:flex lg:flex-col"
    >
      <h2 class="text-2xl font-black">
        {{ post.title }}
      </h2>
      <p class="text-base leading-4">{{ post.body }}</p>
      <p class="text-base leading-4 mt-4">
        Et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad
        voluptatem doloribus vel accusantium quis pariatur molestiae porro eius
        odio et labore et velit aut
      </p>
      <p class="text-base leading-4 mt-4">
        Et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad
        voluptatem doloribus vel accusantium quis pariatur molestiae porro eius
        odio et labore et velit aut
      </p>
    </article>
    <div class="px-6 py-4 bg-yellow-light border-b border-gray-900 lg:flex">
      <h3 class="text-blue text-2xl font-black">Comments</h3>
    </div>

    <article
      v-for="comment in comments"
      :key="comment.id"
      class="comment p-6 bg-yellow-light border-b border-gray-900 flex lg:flex"
    >
      <figure class="flex justify-center items-start p-3 w-2/12">
        <img
          src="https://via.placeholder.com/150"
          alt="usr_img"
          class="rounded-full w-12"
        />
      </figure>
      <base-spinner v-if="isLoading"></base-spinner>
      <article class="p-3 w-10/12 flex flex-col justify-center items-start">
        <p class="text-xs font-black">
          <span class="text-blue">{{ comment.email.split("@")[0] }}</span>
          commented on
          <span class="time uppercase">{{ time | formatDate }}</span>
        </p>
        <p class="mt-2">{{ comment.body }}</p>
      </article>
    </article>
    <transition name="appear">
      <section
        class="user-modal overflow-y-auto absolute top-0 left-0 bottom-0 right-0 z-30 bg-yellow lg:bg-white lg:pt-20 lg:bg-opacity-50"
        v-if="openModal"
      >
        <div
          class="close-section bg-yellow flex justify-end items-center px-6 py-1 border-b border-black"
        >
          <h1 class="text-3xl font-bold mr-6">
            win<span class="transform -rotate-12 translate-y-0 inline-block"
              >Q</span
            >uest
          </h1>
          <button class="close-modal text-2xl" @click="openUserModal">
            <i class="fas fa-times text-white self-center"></i>
          </button>
        </div>
        <the-user :user="user" :posts="userPosts"></the-user>
      </section>
    </transition>
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
      time: new Date().toISOString(),
      isLoading: false,
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
      const postByID = this.GetAllPosts.find(
        (post) => post.id == this.$route.params.id
      );
      this.post = {
        userId: postByID.userId,
        title: postByID.title.charAt(0).toUpperCase() + postByID.title.slice(1),
        body: postByID.body.charAt(0).toUpperCase() + postByID.title.slice(1),
      };
      this.getTheUser(this.post.userId);
    },
    async getComments() {
      this.isLoading = true;
      await this.$store.dispatch("getAllComments", this.$route.params.id);
      this.isLoading = false;
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