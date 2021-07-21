<template>
  <div class="wrapper">
    <div class="header">{{ settings.header }}</div>
    <div class="content">
      <component
        :is="settings.name"
        :sett="settings"
        @addNewPayment="addPayment"
        @editPayment="editPayment"
        @deletePayment="deletePayment"
      />
    </div>
    <div class="footer">
      <button @click="$modal.hide()">Close</button>
    </div>
  </div>
</template>

<script>
import AddPayment from "./AddPayment.vue";
import EditingType from "./EditingType.vue";

export default {
  components: { AddPayment, EditingType,  },
  props: {
    settings: Object
  },
  methods: {
    addPayment(data) {
      console.log(data);
    },
    editPayment(data) {
      debugger
      console.log(data);
    },
    deletePayment(data) {
      debugger
      console.log(data);
    },
  }
};
</script>

<style scoped lang="scss">
.wrapper {
  // padding: 20px;
  position: absolute;
  top: 0px;
  background: #fff;
  box-shadow:         0px 0px 30px 6px rgba(50, 50, 50, 0.32);
}
</style>
