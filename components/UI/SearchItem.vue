<template>
  <button class="search-item" @click.prevent="$emit('choice')">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "SearchItem",
  props: {
    text: {
      type: String,
      default: "",
    },
  },
  emits: ["choice"],
};
</script>

<style scoped lang="scss">
.search-item {
  color: #6c7684;
  border-radius: 20px;
  background: #eaddf7;
  padding: 5px 7px;
  font-size: 12px;
  line-height: 140%;
  margin-bottom: 5px;
  margin-right: 5px;
}
</style>
