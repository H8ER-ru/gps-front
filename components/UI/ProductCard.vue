<template>
  <div class="product-card">
    <div class="product-card__picture">pic</div>
    <div class="product-card__text">
      <p class="product-card__name">Вишня красная королевская</p>
      <p class="product-card__description">1шт (80г)</p>
    </div>
    <div class="product-card__price">
      <span class="product-card__price">485,00₽ </span>
      <span class="product-card__diff product-card__diff--positive">
        <svg
          width="4"
          height="9"
          viewBox="0 0 4 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.16963 7.91879L3.73333 6.62591L4 6.84639L2 8.5L0 6.84639L0.266667 6.62591L1.7925 7.88748L1.7925 0.5L2.16962 0.5L2.16963 7.91879Z"
            fill="#46CB25"
          />
        </svg>
        312,00₽ (54%)
      </span>
    </div>
  </div>
</template>

<script>
import Checkbox from "./Checkbox";
export default {
  name: "ProductCard",
  components: { Checkbox },
};
</script>

<style scoped lang="scss">
.product-card {
  padding: 8px 0;
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid var(--functionMainLight);
  & > * {
    flex-shrink: 0;
    display: block;
  }
  &__picture {
    background: rgba(104, 11, 197, 0.22);
    width: 45px;
    height: 45px;
    margin-right: 5px;
  }
  &__price {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: 5px;
    font-weight: 500;
    font-size: 13px;
    line-height: 140%;
  }
  &__diff {
    font-weight: 400;
    font-size: 10px;
    line-height: 140%;
    &--positive {
      color: var(--positive);
    }
    &--negative {
      color: var(--negative);
    }
  }
  &__name {
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
  }
  &__text {
    max-width: 50%;
  }
  &__description {
    font-weight: 400;
    font-size: 10px;
    color: var(--searchColor);
  }
}
</style>
