<template>
  <NuxtLayout name="app">
    <div>
      <h1>Автворизация</h1>
      <form style="display: flex; flex-direction: column;width: 400px" action="">
        <input placeholder="Почта" type="text">
        <input placeholder="Пароль" type="text">
      </form>
      <nuxt-link to="/app">Войти</nuxt-link>
    </div>
  </NuxtLayout>
</template>

<script>
export default {
  name: "auth",
}
</script>

<style scoped>

</style>