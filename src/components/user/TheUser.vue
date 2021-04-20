<template>
  <section class="user-modal ">
    <header>
      <div
        class="user-avatar flex flex-row justify-start items-center px-6 py-1 border-b border-gray-800 bg-yellow"
      >
        <figure class="w-3/12 flex justify-end items-center" >
          <img
            src="https://via.placeholder.com/150"
            alt="usr_avatar"
            class="rounded-full w-12 "
          />
        </figure>
        <h2 class="w-9/12 ml-4 text-2xl font-black ">{{ user.username }}</h2>
      </div>
    </header>
    <article
      class="bg-yellow-light flex flex-col justify-start shadow drop-shadow-2xl"
    >
      <div
        class="user-data-content px-6 py-3 flex flex-row shadow drop-shadow-2xl"
      >
        <div class="user-data w-3/12 flex justify-end ">
          <p class="uppercase">Name</p>
        </div>
        <div class="user-data w-9/12 ml-4 font-black">
          <p>{{ user.name }}</p>
        </div>
      </div>
      <div
        class="user-data-content px-6 py-3 flex flex-row shadow drop-shadow-2xl"
      >
        <div class="user-data w-3/12 flex justify-end">
          <p class="uppercase">Address</p>
        </div>
        <div class="user-data w-9/12 ml-4 font-black">
          <p >{{ user.address.street }}</p>
          <p>{{ user.address.suite }}</p>
          <p>{{ user.address.city }}</p>
          <p>{{ user.address.zipcode }}</p>
        </div>
      </div>
      <div
        class="user-data-content px-6 py-3 flex flex-row border-b border-black"
      >
        <div class="user-data w-3/12 flex justify-end">
          <p class="uppercase">Company</p>
        </div>
        <div class="user-data w-9/12 ml-4 font-black">
          <p>{{ user.company.name }}</p>
        </div>
      </div>
    </article>
    <article
      class="user-posts bg-yellow-light "
      v-for="post in posts"
      :key="post.id"
    >
      <div class="post px-6 py-3  border-b border-gray-800">
        <h5 class="text-xl font-black">{{ post.title }}</h5>
        <span class="time text-sm uppercase mt-2 block">{{ time | formatDate }}AM</span>
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
  data() {
    return {
      time: new Date().toISOString(),
    };
  },
};
</script>

<style>
</style>