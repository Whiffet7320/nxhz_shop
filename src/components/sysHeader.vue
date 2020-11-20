<template>
  <div class="header">
    <div class="logo">
      <img src="../assets/images/ICON20pt@2px.png" alt="农心海祝商城商家后台" />
      <span>农心海祝商城商家后台</span>
    </div>
    <div class="user">
      <span>你好，{{ user.contacts_name }}</span>
      <el-button icon="el-icon-switch-button" @click="signOut" circle></el-button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["user"]),
  },
  created() {
    console.log(this.user.contacts_name);
  },
  methods:{
    signOut(){
      // this.$store.commit('changeFlag',false)
      sessionStorage.setItem("isLogin", false);
      console.log(sessionStorage.getItem("isLogin"))
      this.$router.push({path:'/'})
      this.$router.go(0)
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  position: relative;
  background-color: #001529;
}
img {
  vertical-align: middle;
}
span {
  margin-left: 10px;
  font-size: 20px;
  vertical-align: middle;
}
.user {
  height: 100%;
  position: absolute;
  right: 10%;
  line-height: 70px;
  color: #fff;
}
.user span {
  font-size: 16px;
  margin-right: 14px;
}
</style>
