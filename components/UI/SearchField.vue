<template>
  <label class="search-field">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.7138 6.8382C18.1647 9.28913 18.1647 13.2629 15.7138 15.7138C13.2629 18.1647 9.28913 18.1647 6.8382 15.7138C4.38727 13.2629 4.38727 9.28913 6.8382 6.8382C9.28913 4.38727 13.2629 4.38727 15.7138 6.8382"
        stroke="#6C7684"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19 19L15.71 15.71"
        stroke="#6C7684"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <input
      :value="value"
      type="text"
      placeholder="Поиск товара"
      autocomplete="on"
    />
  </label>
</template>

<script>
export default {
  name: "SearchField",
  props: {
    value: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.search-field {
  background: var(--inputBackground);
  border-radius: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 5px;
  & > * {
    flex-shrink: 0;
  }
  input {
    width: 100%;
    margin-left: 5px;
    &::placeholder {
      font-weight: 400;
      font-size: 12px;
      line-height: 140%;
      color: var(--searchColor);
    }
    &:focus,
    &:focus-visible {
      outline: none;
    }
  }
}
</style>
