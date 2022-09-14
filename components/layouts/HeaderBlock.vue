<template>
  <header class="header">
    <nuxt-link to="/" class="header__title"> Great prices </nuxt-link>
    <button class="header__burger">
      <svg
        width="30"
        height="19"
        viewBox="0 0 30 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="30" height="3" rx="1.5" fill="#282828" />
        <rect y="8" width="30" height="3" rx="1.5" fill="#282828" />
        <rect y="16" width="30" height="3" rx="1.5" fill="#282828" />
      </svg>
    </button>
  </header>
</template>

<script>
export default {
  name: "HeaderBlock",
};
</script>

<style lang="scss">
.header {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 10px 14px 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  background: white;
  &__title {
    font-weight: 500;
    font-size: 28px;
    line-height: 110%;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
}
</style>
