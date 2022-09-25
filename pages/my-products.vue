<template>
  <main>
    <SearchField class="mb-30" />
    <BaseTitle text="Мои товары" />
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

<script>
import SearchField from "../components/UI/SearchField";
import BaseTitle from "../components/UI/BaseTitle";
import ProductCard from "../components/UI/ProductCard";

export default {
  name: "MyProducts",
  components: { ProductCard, BaseTitle, SearchField },
};
</script>

<style scoped></style>
