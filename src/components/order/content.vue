<template>
  <div class="order-content">
    <Content-top />
    <Content-botton />
  </div>
</template>
<script>
import ContentTop from './contentTop'
import ContentBotton from './contentBotton'
export default {
  components:{
    ContentTop,
    ContentBotton
  }
}
</script>
<style>
.order-content{
  position: relative;
  height: 100%;
}
</style>