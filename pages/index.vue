<template>
  <main class="main-page">
    <BaseTitle text="Сэкономлено средств" />
    <p class="main-page__money">5 771,11₽</p>
    <p class="main-page__period">
      <span class="main-page__period-number">+905,6₽ 15% </span>
      <span class="main-page__period-toggle">(за весь период)</span>
    </p>
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
    <ProductCard
      image="https://leonardo.edadeal.io/dyn/cr/catalyst/offers/xsaudroqej6xlh7hbuctdcenlq.jpg"
    />
    <ProductCard
      image="https://leonardo.edadeal.io/dyn/cr/catalyst/offers/7562vl5ejr66qo3buyi7aljce4.jpg"
      shop-img="https://leonardo.edadeal.io/dyn/re/retailers/images/icons/sq/06c522eb34f54fed99665f69cb0794b7.png"
    />
    <ProductCard
      image="https://leonardo.edadeal.io/dyn/cr/catalyst/offers/sw4ao6lcebmqfoz3cutqxg7u7e.jpg"
      shop-img="https://leonardo.edadeal.io/dyn/re/retailers/images/icons/sq/a20f46b5662b4825a29d52b897624916.png"
    />
  </main>
</template>

<script lang="ts">
import BaseTitle from "~/components/UI/BaseTitle.vue";
import ProductCard from "~/components/UI/ProductCard.vue";
export default {
  components: { ProductCard, BaseTitle },
};
</script>

<style lang="scss">
.main-page {
  &__money {
    margin-top: 5px;
    font-weight: 500;
    font-size: 36px;
    line-height: 110%;
    color: var(--functionMain);
  }
  &__period {
    font-size: 12px;
    line-height: 140%;
  }
  &__period-number {
    color: var(--positive);
  }
  &__period-toggle {
    color: var(--functionMainLight);
  }
}
</style>
