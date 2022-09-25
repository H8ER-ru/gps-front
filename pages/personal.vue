<template>
  <main>
    <div
      style="
        background: rgba(85, 20, 191, 0.06);
        height: 172px;
        width: 100%;
        margin-bottom: 30px;
      "
    ></div>
    <ProfileButton text="Профиль" icon="assets/icons/user.svg" />
    <ProfileButton text="Карты" icon="assets/icons/card.svg" />
    <ProfileButton text="Мои покупки" icon="assets/icons/shop.svg" />
    <ProfileButton text="Статистика" icon="assets/icons/stat.svg" />
    <ProfileButton text="Избранное" icon="assets/icons/like.svg" />
    <ProfileButton text="настройки" icon="assets/icons/setting.svg" />
  </main>
</template>

<script>
import ProfileButton from "../components/UI/ProfileButton";
export default {
  name: "Profile",
  components: { ProfileButton },
};
</script>

<style scoped></style>
