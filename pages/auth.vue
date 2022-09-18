<template>
  <StartStep v-if="currentStep === 'start'" @next="currentStep = 'emailStep'" />
  <EmailAuth v-if="currentStep === 'emailStep'" />
</template>

<script>
import StartStep from "../components/features/AuthSteps/StartStep";
import EmailAuth from "../components/features/AuthSteps/EmailAuth";
definePageMeta({
  layout: "auth",
});
export default {
  components: { EmailAuth, StartStep },
  data: () => ({
    currentStep: "start",
  }),
};
</script>

<style lang="sass"></style>
