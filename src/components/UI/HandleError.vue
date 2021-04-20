<template>
  <dialog open class="bg-yellow-light fixed top-2 w-11/12 lg:w-3/12">
    <slot>
      <p class="text-base text-gray-900">{{ error }}</p>
    </slot>
  </dialog>
</template>

<script>
export default {
  props: ["error"],
};
</script>

<style lang="scss">
</style>