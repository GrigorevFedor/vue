<template>
  <v-row>
    <v-col>
      <PaymentsDisplay :list="currentElements" />
    </v-col>
    <v-col> 
      <!--{{groupedValues}}-->
      <Diagramm :chartData="groupedValues" :options="chartOptions"/>
    </v-col>
  </v-row>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
import PaymentsDisplay from "@/components/PaymentsDisplay.vue";
import Diagramm from "@/components/Diagramm.vue";

export default {
  name: "Dashboard",
  components: {
    PaymentsDisplay,
    Diagramm
  },
  data() {
    return {
      page: "",
      dialog: false,
      curPage: 1,
      n: 10,
      
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  methods: {
    ...mapMutations(["setPaymentListData", "addDataToPaymentsList"]),
    ...mapActions(["fetchData", "fetchCategory"]), 
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
