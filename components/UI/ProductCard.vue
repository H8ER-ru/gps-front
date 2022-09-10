<template>
  <div class="product-card">
    <div class="product-card__picture">pic</div>
    <p class="product-card__name">
      Пирожные <br />
      Профитроли от компании бест
    </p>
    <div class="product-card__price">
      <span class="product-card__price-new">485,00₽ </span>
      <span class="product-card__price-old">605,00₽</span>
    </div>
    <Checkbox :checked="true" />
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
    &-new {
      font-weight: 300;
      font-size: 12px;
      line-height: 140%;
    }
    &-old {
      font-weight: 300;
      font-size: 10px;
      line-height: 140%;
      text-decoration-line: line-through;
    }
  }
  &__name {
    max-width: 50%;
    font-weight: 400;
    font-size: 10px;
    line-height: 140%;
  }
}
</style>
