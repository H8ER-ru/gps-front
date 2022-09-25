<template>
  <div class="auth-step">
    <h1 class="auth-step__title">Регистрация через Email</h1>
    <p class="auth-step__subtitle">
      Введите пароль и подтверждение пароля для
      <br />
      регистрации
    </p>
    <BaseInput class="mb-36" placeholder="Пароль" />
    <BaseInput class="mb-36" placeholder="Подтверждение пароля" />
    <AppButton text="Продолжить" @click="$emit('next')" />
  </div>
</template>

<script>
import BaseInput from "../../UI/BaseInput";
import AppButton from "../../UI/AppButton";
export default {
  name: "EmailRegister",
  components: { AppButton, BaseInput },
  emits: ["next"],
};
</script>

<style scoped></style>
