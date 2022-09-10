<template>
  <main class="">
    <SearchField class="mb-30" />
    <BaseTitle text="Каталог" />
    <div class="catalog-search">
      <SearchItem text="Красота, гигиена" />
      <SearchItem text="Молочные продукты" />
      <SearchItem text="Хлеб и выпечка" />
      <SearchItem text="Подарки" />
    </div>
  </main>
</template>

<script>
import SearchField from "../components/UI/SearchField";
import BaseTitle from "../components/UI/BaseTitle";
import SearchItem from "../components/UI/SearchItem";

export default {
  name: "Catalog",
  components: { SearchItem, BaseTitle, SearchField },
};
</script>

<style scoped lang="scss">
.catalog-search {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}
</style>
