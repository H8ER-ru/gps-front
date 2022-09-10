<template>
  <button v-if="!link" class="menu-button">
    <slot />
    <span class="menu-button__text">{{ text }}</span>
  </button>
  <nuxt-link v-if="link" :to="link" class="menu-button">
    <slot />
    <span class="menu-button__text">{{ text }}</span>
  </nuxt-link>
</template>

<script>
export default {
  name: "IconButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    link: {
      type: [String, Boolean],
      default: false,
    },
  },
};
</script>

<style scoped lang="scss">
.menu-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;

  &__text {
    font-size: 11px;
    line-height: 135%;
  }
}
</style>
