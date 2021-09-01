<template>
  <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :loop="true"
    :centeredSlides="true"
    :slidesPerView="'3'"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    }"
    :pagination="true"
    class="mySwiper"
  >
    <swiper-slide
      class="mySlide"
      v-for="(shoe, index) in getCards"
      :key="index"
    >
      <div
        class="wrapper__slide"
        :style="{ backgroundImage: `url('${shoe.imgURL}')` }"
      >
        <div class="isActive">
          <h3>{{ shoe.model }}</h3>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { mapGetters } from "vuex";

// Import Swiper styles
import "swiper/swiper.scss";

import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: mapGetters(["getCards"]),
};
</script>
<style lang="sass" scoped>
.mySwiper
    box-shadow: 2px 2px 8px 10px rgba(0,0,0,.3)
    padding-top: 50px
    padding-bottom: 50px
    .mySlide
        width: 300px

        .wrapper__slide
          background-size: cover
          background-repeat: no-repeat
          background-position: center center
          height: 300px
          width: 100%


    .isActive
      display: none
      position: relative
      height: 100%
      h3, button
        position: absolute
      h3
        display: block
        top: -50px
        right: 0px
        padding: 20px
        background-color: rgba(0,0,0,.2)
        color: #fff
        border-radius: 8px
      button
        top: 50px
        right: 15%
        padding: 10px 20px
        border-radius: 4px




    .swiper-slide-active .isActive
      display: block
</style>
