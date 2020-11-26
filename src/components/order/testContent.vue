<template>
  <div class="order-content">
    <Content-top />
    <Content-botton />
    <Page />
  </div>
</template>
<script>
import ContentTop from "./testTop";
import ContentBotton from "./testBottom";
import Page from "./page";
export default {
  components: {
    ContentTop,
    ContentBotton,
    Page,
  },
};
</script>
<style>
.order-content {
  position: relative;
  height: 100%;
}
</style>