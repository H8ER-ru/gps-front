<template>
  <div>
    <HeaderBlock />
    <div class="app-wrapper">
      <slot />
    </div>
    <FooterBlock />
  </div>
</template>

<script>
import HeaderBlock from "../components/layouts/HeaderBlock.vue";
import FooterBlock from "../components/layouts/FooterBlock.vue";

export default {
  name: "App",
  components: { FooterBlock, HeaderBlock },
};
</script>

<style scoped lang="sass">
.app-wrapper
  min-height: 80vh
</style>
