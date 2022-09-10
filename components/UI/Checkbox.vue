<template>
  <label class="checkbox">
    <input type="checkbox" :checked="checked" @click="$emit('check')" />
    <span>
      <svg
        width="9"
        height="7"
        viewBox="0 0 9 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 1L3.1875 6L1 3.72727"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
  </label>
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["check"],
};
</script>

<style scoped lang="scss">
.checkbox {
  width: 16px;
  height: 16px;
  input {
    appearance: none;
    opacity: 0;
    display: none;
  }
  span {
    width: 16px;
    height: 16px;
    border: 1px solid rgba(#004077, 0.2);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      transition: opacity 0.3s linear;
      opacity: 0;
    }
  }
  input:checked + span {
    background: var(--functionMain);
    svg {
      opacity: 1;
    }
  }
}
</style>
