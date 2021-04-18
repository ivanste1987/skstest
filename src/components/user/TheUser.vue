<template>
  <section class="user-modal">
    <header>
      <div class="user-avatar">
        <img src="https://www.placecage.com/200/200" alt="usr_avatar" />
        <h2>{{ user.username }}</h2>
      </div>
    </header>
    <article>
      <div class="user-data-content">
        <div class="user-data">
          <p>Name</p>
        </div>
        <div class="user-data">
          <p>{{ user.name }}</p>
        </div>
      </div>
      <div class="user-data-content">
        <div class="user-data">
          <p>Address</p>
        </div>
        <div class="user-data">
          <p>{{ user.address.street }}</p>
          <p>{{ user.address.suite }}</p>
          <p>{{ user.address.city }}</p>
          <p>{{ user.address.zipcode }}</p>
        </div>
      </div>
      <div class="user-data-content">
        <div class="user-data">
          <p>Company</p>
        </div>
        <div class="user-data">
          <p>{{ user.company.name }}</p>
         
        </div>
      </div>
    </article>
    <article class="user-posts" v-for="post in posts" :key="post.id">
      <div class="post">
        <h5>{{ post.title }}</h5>
       <span class="time">{{ time | formatDate  }}AM</span>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
    },
    posts: {
      type: Array,
    },
  },
  data(){
    return{
      time: new Date().toISOString()
    }
  }
};
</script>

<style>
</style>