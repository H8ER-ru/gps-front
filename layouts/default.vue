<template>
  <div class="app-wrapper">
    <HeaderBlock />
    <div class="page-wrapper">
      <slot />
    </div>
    <BottomMenu />
  </div>
</template>

<script>
import HeaderBlock from "../components/layouts/HeaderBlock.vue";
import BottomMenu from "../components/layouts/BottomMenu";

export default {
  name: "App",
  components: { BottomMenu, HeaderBlock },
};
</script>

<style scoped lang="sass">
.app-wrapper
  padding-bottom: 60px
  padding-top: 80px

.page-wrapper
  min-height: 70vh
  padding: 10px
</style>
