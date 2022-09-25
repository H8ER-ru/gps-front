<template>
  <main>
    <SearchField class="mb-30" />
    <BaseTitle text="Мои товары" />
    <ProductCard shop-img="assets/images/shops/magnit.webp" />
    <ProductCard image="assets/images/eda/2.webp" />
    <ProductCard
      image="assets/images/eda/1.webp"
      shop-img="assets/images/shops/5.webp"
    />
    <ProductCard
      image="assets/images/eda/3.webp"
      shop-img="assets/images/shops/ab.png"
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
