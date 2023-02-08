<template>
  <div>
    <main>
      <NuxtCarousel />
      <br />
      <TopSales />
      <SideBar />
      <Footer />
    </main>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
<style scoped>
main {
  background-image: url(../static/Edit.jpg);
  background-position-x: -100px;
  background-position-y: -100px;
  background-size: cover;
}
</style>
