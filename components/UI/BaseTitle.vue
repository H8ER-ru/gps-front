<template>
  <h2 class="base-title">{{ text }}</h2>
</template>

<script>
export default {
  name: "BaseTitle",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.base-title {
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 130%;
}
</style>
