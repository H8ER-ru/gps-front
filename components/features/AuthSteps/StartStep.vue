<template>
  <div class="auth-step">
    <img
      class="auth-step__img"
      width="94"
      height="94"
      src="~/assets/images/logoauth.webp"
      alt="GPS"
    />
    <h1 class="auth-step__title">Войдите или зарегистрируйтесь</h1>
    <p class="auth-step__subtitle">
      Укажите E-mail для входа в аккаунт или регистрации в приложении
    </p>
    <BaseInput
      :value="input"
      class="mb-36"
      placeholder="Email или номер телефона"
      @change="changeInput"
    />
    <AppButton text="Продолжить" @click="$emit('next')" />
  </div>
</template>

<script>
import BaseInput from "../../UI/BaseInput";
import AppButton from "../../UI/AppButton";

let regex =
  /([!#-'*+\/-9=?A-Z^-~-]+(.[!#-'*+\/-9=?A-Z^-~-]+)*|"([]!#-[^-~ \t]|(\[\t -~]))+")@([!#-'*+\/-9=?A-Z^-~-]+(.[!#-'*+\/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])/;

export default {
  name: "StartStep",
  components: { AppButton, BaseInput },
  emits: ["next"],
  data: () => ({
    input: "",
  }),
  methods: {
    changeInput(value) {
      this.input = value;
    },
  },
};
</script>

<style lang="sass">
@import "/assets/style/auth-step.sass"
</style>
