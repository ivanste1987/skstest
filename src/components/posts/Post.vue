<template>
  <div class="post">
    <header class="title">
      <router-link :to="{ name: 'ThePostDescript', params: { id: post.id } }">
        {{ post.title }}
      </router-link>
    </header>
    <article class="body">
      <p>{{ post.body }}</p>
    </article>
    <footer>
      <div class="col">
        <div class="time">{{ time | formatDate  }}AM</div>
      </div>
      <div class="col">
        <figure>
          <figcaption>{{ user.name }}</figcaption>
          <img src="https://www.placecage.com/200/200" alt="usr_img" />
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