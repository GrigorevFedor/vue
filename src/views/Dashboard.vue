<template>
  <v-row>
    <v-col>
      <div class="text-h5 text-md-h3 mb-8">My personal Cost</div>
      <v-dialog
          v-model="dialog"
          width="500"
        >
        <template v-slot:activator="{ on }">
          <v-btn color="teal" dark v-on="on">
            Add new cost <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>

        <v-card>
           <AddPayment @addNewPayment="addData"/>
        </v-card>
      </v-dialog>



        
    <PaymentsDisplay :list="currentElements" />
    
    </v-col>
    <v-col> 
      {{groupedValues}}
      <Diagramm :chartData="groupedValues" :options="chartOptions"/>
    </v-col>
  </v-row>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
import PaymentsDisplay from "@/components/PaymentsDisplay.vue";
// import Pagination from "@/components/Pagination.vue";
import AddPayment from "@/components/AddPayment.vue";
import Diagramm from "@/components/Diagramm.vue";

export default {
  name: "Dashboard",
  components: {
    PaymentsDisplay,
    AddPayment,
    // Pagination,
    Diagramm
  },
  data() {
    return {
      page: "",
      dialog: false,
      curPage: 1,
      n: 10,
      // chartData: {
      //   labels: [
      //     'January',
      //     'February',
      //     'March',
      //     'April',
      //     'May',
      //     'June',
      //     'July',
      //     'August',
      //     'September',
      //     'October',
      //     'November',
      //     'December'
      //   ],
      //   datasets: [
      //   {
      //     label: 'Data One',
      //     data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
      //   }
      // ]
      // },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  methods: {
    ...mapMutations(["setPaymentListData", "addDataToPaymentsList"]),
    ...mapActions(["fetchData", "fetchCategory"]),
    addData(data) {
      this.dialog = false
      this.addDataToPaymentsList(data);
    },
    showPaymentsForm (){
      this.$modal.show('AddPayment',{header:"Add"})
    },
    closePaymentsForm (){
      this.$modal.hide()
    },
    onChangePage(p) {
      this.curPage = p;
    },
    onClose(){
      this.addFormShown = false
    },
    
  },
  computed: {
    ...mapGetters({
      paymentsList: "getPaymentList",
      categories: "getCategoryList",
      groupedValues: "getGroupedValues",
    }),
    currentElements() {
      const { n, curPage } = this;
      return this.paymentsList.slice(n * (curPage - 1), n * (curPage - 1) + n);
    },
    getFPV() {
      return this.$store.getters.getFullPyamentValue;
    }
  },
  created() {
    this.fetchData();
    if (!this.categories.length) {
      this.fetchCategory();
    }
  },
  mounted() {
    const page = this.$route.params.page || 1;
    this.curPage = Number(page);
  }  
};
</script>
