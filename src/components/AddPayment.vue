<template>
  <div>
    <button @click="showForm = !showForm">Add new cost</button>
    <form v-if="showForm" action="">
      <input type="date" v-model="date" />
      <input type="text" v-model="category" />
      <input type="number" v-model="value" />
      <input type="button" value="Add" @click="addPayment" />
    </form>
  </div>
</template>

<script>
export default {
  name: "AddPayment",
  data () {
    return {
      date: "",
      category: "",
      value: 0,
      showForm: false,
  }},
  
  watch: {},
  methods: {
    addPayment() {
      this.$emit('addNewPayment', {date: this.date, category: this.category, value: this.value});
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
</style>
