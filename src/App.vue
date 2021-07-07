<template>
  <div id="app">
    <h1>My payment list</h1>
    <AddPayment @addNewPayment="addNewPayment" />
    <List :items="paymentsList" :page="currentPage"/>
    <Pagination :count="Math.ceil(paymentsList.length / 5)" @changePage="changePage"/>
  </div>
</template>

<script>
import AddPayment from "./components/AddPayment.vue";
import List from "./components/List.vue";
import Pagination from "./components/Pagination.vue";

export default {
  name: "App",
  components: {
    AddPayment,
    List,
    Pagination,
  },
  data() {
    return {
      paymentsList: [],
      currentPage: 1,
    };
  },

  methods: {
    addNewPayment(data) {
      this.paymentsList = [...this.paymentsList, data];
    },
    changePage(page) {
      this.currentPage = page;
    },
    fetchData() {
      return [
        {
          date: "28.03.2020",
          category: "1",
          value: 169,
        },
        {
          date: "24.03.2020",
          category: "2",
          value: 532,
        },
        {
          date: "28.03.2020",
          category: "3",
          value: 169,
        },
        {
          date: "24.03.2020",
          category: "4",
          value: 360,
        },
        {
          date: "24.03.2020",
          category: "5",
          value: 532,
        },
        {
          date: "28.03.2020",
          category: "6",
          value: 169,
        },
        {
          date: "24.03.2020",
          category: "7",
          value: 360,
        },
        {
          date: "24.03.2020",
          category: "8",
          value: 532,
        },
        {
          date: "28.03.2020",
          category: "9",
          value: 169,
        },
        {
          date: "24.03.2020",
          category: "10",
          value: 360,
        },
        {
          date: "24.03.2020",
          category: "11",
          value: 532,
        }
      ];
    },
  },
  created() {
    this.paymentsList = this.fetchData();
  },
};
</script>

<style lang="scss">
</style>
