<template>
  <main>
    <SearchField class="mb-30" />
    <BaseTitle text="Мои товары" />
    <ProductCard />
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
