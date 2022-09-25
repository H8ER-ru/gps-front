<template>
  <StartStep
    v-if="currentStep === 'start'"
    @next="currentStep = 'emailLogin'"
  />
  <EmailAuth v-if="currentStep === 'emailLogin'" />
  <EmailRegister v-if="currentStep === 'emailRegister'" />
</template>

<script lang="ts">
import StartStep from "../components/features/AuthSteps/StartStep.vue";
import EmailAuth from "../components/features/AuthSteps/EmailAuth.vue";
import EmailRegister from "../components/features/AuthSteps/EmailRegister.vue";
import { definePageMeta } from "#imports";

definePageMeta({
  layout: "auth",
});
export default {
  components: { EmailRegister, EmailAuth, StartStep },
  data: () => ({
    currentStep: "start",
  }),
};
</script>

<style lang="sass"></style>
