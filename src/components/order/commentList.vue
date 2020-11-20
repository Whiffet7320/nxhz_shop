<template>
  <div class="commentList">
    <Content-top />
    <Content-botton />
  </div>
</template>
<script>
import ContentTop from './listTop'
import ContentBotton from './listBottom'
export default {
  components:{
    ContentTop,
    ContentBotton
  }
}
</script>
<style>
.commentList{
  position: relative;
  height: 100%;
}
</style>