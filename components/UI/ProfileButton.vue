<template>
  <button class="profile-button">
    <img :width="24" :height="24" :src="icon" :alt="text" loading="lazy" />
    <span>{{ text }}</span>
    <svg
      width="22"
      height="13"
      viewBox="0 0 22 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#5514BF"
    >
      <path d="M21 1L11 11L1 1" stroke-width="2" />
    </svg>
  </button>
</template>

<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});
</script>

<style lang="sass">
.profile-button
  width: 100%
  height: 38px
  border-bottom: 1px solid var(--functionMainLight)
  display: flex
  align-items: center
  font-weight: 500
  font-size: 13px
  line-height: 16px
  text-transform: uppercase
  letter-spacing: 0.08em
  span
    margin-left: 5px

  svg
    margin-left: auto
</style>
