<template>
  <main class="main-page">
    <BaseTitle text="Сэкономлено средств" />
    <p class="main-page__money">5 771,11₽</p>

    <div
      style="
        background: rgba(85, 20, 191, 0.06);
        width: 100%;
        height: 172px;
        margin-top: 40px;
        margin-bottom: 20px;
      "
    >
      реклама
    </div>
    <BaseTitle text="Купить сегодня" />
    <ProductCard />
    <ProductCard />
    <ProductCard />
  </main>
</template>

<script lang="ts">
import BaseTitle from "~/components/UI/BaseTitle.vue";
import ProductCard from "~/components/UI/ProductCard.vue";
export default {
  components: { ProductCard, BaseTitle },
  setup() {
    console.log("start");
  },
};
</script>

<style scoped lang="scss">
.main-page {
  &__money {
    margin-top: 5px;
    font-weight: 500;
    font-size: 36px;
    line-height: 110%;
    color: var(--functionMain);
  }
}
</style>
