<template>
  <div
    ref="card"
    class="product-card"
    :class="{ 'product-card--right': swiperRight }"
    @touchstart="touchStart"
  >
    <div class="product-card__buy">Куплено</div>
    <img class="product-card__picture" :src="image" />
    <div class="product-card__text">
      <p class="product-card__name">Вишня красная королевская</p>
      <p class="product-card__description">1шт (80г)</p>
    </div>
    <div class="product-card__price">
      <img :src="shopImg" width="16" height="16" />
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
  props: {
    shopImg: {
      type: String,
      required: false,
      default: "",
    },
    image: {
      type: String,
      required: false,
      default: "",
    },
  },
  data: () => ({
    swiperRight: false,
    swipeLeft: false,
  }),
  mounted() {},
  methods: {
    touchStart(touchEvent) {
      if (touchEvent.changedTouches.length !== 1) {
        // We only care if one finger is used
        return;
      }
      const posXStart = touchEvent.changedTouches[0].clientX;
      addEventListener(
        "touchend",
        (touchEvent) => this.touchEnd(touchEvent, posXStart),
        { once: true }
      );
    },
    touchEnd(touchEvent, posXStart) {
      if (touchEvent.changedTouches.length !== 1) {
        // We only care if one finger is used
        return;
      }
      const posXEnd = touchEvent.changedTouches[0].clientX;
      if (posXStart < posXEnd) {
        this.swiperRight = true;
        setTimeout(() => {
          this.swiperRight = false;
        }, 2000);
      } else if (posXStart > posXEnd) {
        this.$refs.card.style.background = "blue";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.product-card {
  position: relative;
  padding: 8px 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid var(--functionMainLight);
  transition: right 0.5 ease-in;
  & > * {
    flex-shrink: 0;
    display: block;
  }

  &--right {
    right: -100px;
    .product-card__buy {
      opacity: 1;
    }
  }

  &__buy {
    opacity: 0;
    width: 100px;
    height: 70px;
    background: #b293f1;
    position: absolute;
    left: -100px;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.3s linear;
  }
  &__picture {
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
    img {
      border-radius: 50%;
      margin-left: auto;
      margin-bottom: 3px;
    }
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
