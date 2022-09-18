<template>
  <div class="auth-step">
    <h1 class="auth-step__title">Вход через Email</h1>
    <p class="auth-step__subtitle">Введите пароль вашей учётной записи</p>
    <BaseInput class="mb-36" placeholder="Пароль" />
    <AppButton text="Продолжить" @click="$emit('next')" />
  </div>
</template>

<script>
import BaseInput from "../../UI/BaseInput";
import AppButton from "../../UI/AppButton";
export default {
  name: "EmailAuth",
  components: { AppButton, BaseInput },
  emits: ["next"],
};
</script>

<style scoped></style>
