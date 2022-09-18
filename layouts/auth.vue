<template>
  <div class="auth-wrapper">
    <header aria-label="Навигация по странице" class="auth-wrapper__header">
      <a class="auth-wrapper__link" href="/">
        <img src="~/assets/images/gps1.svg" alt="Логотип GPS" />
        <span>Great Prices</span>
      </a>
    </header>
    <img
      class="auth-wrapper__img"
      src="~assets/images/auth-bg.webp"
      loading="lazy"
      decoding="async"
      alt="Рабочее место"
    />
    <div class="auth-wrapper__inner">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Auth",
};
</script>

<style lang="scss">
.auth-wrapper {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  &__img {
    width: 100%;
    object-position: center center;
    height: 100%;
    object-fit: cover;
  }
  &__inner {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))
  }

  &__header {
    position: absolute;
    top: 0;
    left: 0;
    padding: 40px 60px;
    z-index: 2;
  }
  &__link {
    display: flex;
    align-items: flex-end;
    cursor: pointer;
    span {
      font-weight: 400;
      font-size: 34px;
      line-height: 120%;
      color: white;
      margin-left: 10px;
    }
  }
}
</style>
