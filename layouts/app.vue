<template>
  <div>
    <Header/>
    <div class="app-wrapper">
      <slot />
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";

export default {
  name: "app",
  components: {Footer, Header}
}
</script>

<style scoped lang="sass">
.app-wrapper
  min-height: 80vh
</style>