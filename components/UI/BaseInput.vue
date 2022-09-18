<template>
  <label class="base-input">
    <input
      ref="input"
      class="base-input__input"
      :value="props.value"
      type="text"
      @change="changeHandler"
      @focusin="focused = true"
      @focusout="focused = false"
    />
    <span
      class="base-input__placeholder"
      :class="{'base-input__placeholder--top': props.value.length || focused}"
    >
      {{ props.placeholder }}
    </span>
  </label>
</template>

<script setup>
const props = defineProps({
  value: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
});
const emits = defineEmits(["change"]);
const focused = ref(false)

const changeHandler = (e) => {
  const value = e.target.value
  emits("change", value);
};

</script>

<style lang="sass">
.base-input
  width: 100%
  display: flex
  flex-direction: column
  height: 100%
  min-height: 64px
  max-height: 90px
  transition: height .3s linear
  position: relative

  &__input
    background: var(--inputBackground)
    border-radius: 5px
    width: 100%
    height: 64px
    cursor: pointer
    outline: none
    padding: 28px 16px 12px 16px
    font-weight: 500
    font-size: 16px
    line-height: 140%
  &__placeholder
    position: absolute
    top: 21px
    left: 16px
    font-weight: 500
    font-size: 16px
    line-height: 140%
    color: var(--textMain)
    transition: color, top, font-size
    transition-duration: .1s
    transition-timing-function: ease-in
    &--top
      top: 12px
      font-weight: 400
      font-size: 12px
      line-height: 140%
      color: var(--searchColor)
</style>
