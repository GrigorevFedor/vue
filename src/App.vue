<template>
  <div id="app">
    <h1>My payment list</h1>
    <!-- <AddPayment @addNewPayment="addNewPayment" /> -->
    <router-view/>
    <!-- <CategorySelect :categories="categories" /> -->
      Total: {{getFPV}}
    <List :items="paymentsList" :page="currentPage"/>
    <Pagination :count="Math.ceil(paymentsList.length / 5)" @changePage="changePage"/>
  </div>
</template>

<script>
// import AddPayment from "./components/AddPayment.vue";
import List from "./components/List.vue";
import Pagination from "./components/Pagination.vue";
// import CategorySelect from "./components/CategorySelect.vue";
import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: "App",
  components: {
    // AddPayment,
    List,
    Pagination,
    // CategorySelect,
  },
  data() {
    return {
      // paymentsList: [],
      currentPage: 1,
    };
  },

  methods: {
    ...mapMutations([
      'setPaymentListData',
      // 'addDataToPaymentsList',
    ]),
    ...mapActions([
      'fetchData',
      'fetchCategory'
    ]),
    // addNewPayment(data) {
    //   this.addDataToPaymentsList(data)
    // },
    changePage(page) {
      this.currentPage = page;
    },
   
    
  },
  created() {
    this.fetchData();
    if(!this.categories.length) {
      this.fetchCategory()
    }
  },
  computed: {
    ...mapGetters({
      paymentsList:'getPaymentList',
      categories: 'getCategoryList'
    }),
    getFPV(){
      return this.$store.getters.getFullPyamentValue
    },  
  }
};
</script>

<style lang="scss">
</style>
