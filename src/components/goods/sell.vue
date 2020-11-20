<template>
  <div class="sell-content">
    <Content-top />
    <Content-botton />
    <Page />
  </div>
</template>
<script>
import ContentTop from './sellTop'
import ContentBotton from './sellBottom'
import Page from './page'
export default {
  components:{
    ContentTop,
    ContentBotton,
    Page
  }
}
</script>
<style>
.sell-content{
  position: relative;
  height: 100%;
}
</style>