<template>
  <div>
    <div class="student-list content " id="student-list">
      <list-table></list-table>

      <list-page></list-page>

      <transition>
        <list-modal v-if="showModal"></list-modal>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import listTable from "./stuList/listTable";
import listModal from "./stuList/listModal";
import listPage from "./stuList/listPage";
export default {
  components: {
    listTable,
    listModal,
    listPage,
  },
  computed:{
    ...mapState(['showModal']),
  },
};
</script>

<style scoped>
.v-enter,.v-leave-to{
  top: -100%;
  height: 0%;
}
.v-leave,.v-enter-to{
  top: 0;
  height: 100%;
}
.v-enter-active,.v-leave-active{
  transition: all 0.5s;
}
</style>
