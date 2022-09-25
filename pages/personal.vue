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
    <ProfileButton text="Профиль" icon="/icons/user.svg" />
    <ProfileButton text="Карты" icon="/icons/card.svg" />
    <ProfileButton text="Мои покупки" icon="/icons/shop.svg" />
    <ProfileButton text="Статистика" icon="/icons/stat.svg" />
    <ProfileButton text="Избранное" icon="/icons/like.svg" />
    <ProfileButton text="настройки" icon="/icons/setting.svg" />
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
