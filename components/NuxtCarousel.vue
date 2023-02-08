<template>
  <b-container class="mb-3">
    <br>
    <b-carousel
      controls
      indicators
      img-width="100%"
      img-height="400"
      :interval="5000"
      v-model="slide"
    >
      <b-carousel-slide
        img-src="../static/mitsubishi-eclipse.jpg"
        caption="Primeiro slide"
        text="Hello World, pequeno texto aqui!"
        class="h-100"
      ></b-carousel-slide>
      <b-carousel-slide
        img-src="../static/mitsubishi-eclipse.jpg"
        caption="Segundo slide"
        class="h-100"
      ></b-carousel-slide>
      <b-carousel-slide
        img-src="../static/mitsubishi-eclipse.jpg"
        caption="Terceiro slide"
        class="h-100"
      ></b-carousel-slide>
    </b-carousel>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>
<style>
.carousel-custom {
  margin: 0 auto;
}
</style>