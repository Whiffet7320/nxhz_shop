<template>
  <div class="add-student content content-active" id="add-student">
    <form id="add-student-form">
      <div>
        <label for="name">姓名</label
        ><input type="text" name="name" id="name" ref="name" />
      </div>
      <div>
        <label for="">性别</label>
        <input type="radio" id="male" name="sex" value="0" checked ref="sex" />
        <label for="male" class="redio-label">男</label>
        <input type="radio" id="female" name="sex" value="1" />
        <label for="female" class="redio-label">女</label>
      </div>
      <div>
        <label for="sNo">学号</label>
        <input type="text" name="sNo" id="sNo" ref="sNo" />
      </div>
      <div>
        <label for="email">邮箱</label
        ><input type="text" name="email" id="email" ref="email" />
      </div>
      <div>
        <label for="birth">出生年</label
        ><input type="text" name="birth" id="birth" ref="birth" />
      </div>
      <div>
        <label for="phone">手机号</label
        ><input type="text" name="phone" id="phone" ref="phone" />
      </div>
      <div>
        <label for="address">住址</label
        ><input type="text" name="address" id="address" ref="address" />
      </div>
      <div>
        <label for=""></label>
        <input
          @click="addStu()"
          type="submit"
          value="提交"
          class="btn"
          id="add-student-btn"
        />
        <input type="reset" value="重置" class="btn" />
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      user: {},
      nowPageList: [],
    };
  },
  mounted() {
    this.getUser();
  },
  computed: {
    ...mapState(["nowPage"]),
  },
  methods: {
    success() {
      this.$message({
        message: "提交成功!",
        type: "success",
      });
    },
    fail(msg) {
      this.$message.error(msg);
    },
    getUser() {
      for (const prop in this.$refs) {
        if (prop !== "sex") {
          this.user[prop] = this.$refs[prop].value;
        }
      }
      // console.log(this.$refs.sex.checked);
      if (this.$refs.sex.checked) {
        this.user.sex = 0;
      } else {
        this.user.sex = 1;
      }
    },
    addStu() {
      event.preventDefault();
      this.getUser();
      this.$store
        .dispatch("addStu", this.user)
        .then(() => {
          this.success();
          this.$api.findByPage(this.nowPage + 1).then((data) => {
            this.nowPageList = data.data.data.findByPage;
            this.$store.commit("changePageList", this.nowPageList);
          });
          setTimeout(() => {
            this.$router.push("/studentAdd");
            this.$router.go(0);
          }, 500);
        })
        .catch((data) => {
          this.fail(data.msg);
        });
    },
  },
};
</script>

<style scoped></style>
