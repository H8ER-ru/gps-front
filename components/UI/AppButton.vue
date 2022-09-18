<template>
  <button class="app-button" @click="clickHandler">
    {{ props.text }}
  </button>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "",
    required: true,
  },
});
const emits = defineEmits(["click"]);

const clickHandler = (e) => {
  e.preventDefault();
  emits("click");
};
</script>

<style lang="sass" scoped>
.app-button
  width: 100%
  display: flex
  align-items: center
  justify-content: center
  height: 62px
  border-radius: 100px
  background: var(--functionMain)
  font-weight: 600
  font-size: 16px
  line-height: 140%
  color: #FFFFFF
</style>
