<template>
  <div class="top-block">
    <h2 class="top-block__title">Взлеты и падения дня</h2>
  </div>
</template>

<script>
export default {
  name: "TopBlock",
};
</script>

<style lang="sass">
.top-block
  display: flex
  flex-direction: column
  width: 100%
  background: #F5F1FB
  &__title
    font-weight: 600
    font-size: 18px
    line-height: 130%
</style>
