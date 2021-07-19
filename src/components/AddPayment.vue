<template>
  <div>
    <button @click="showForm = !showForm">Add new cost</button>
    <form v-if="showForm" action="">
      <input type="date" v-model="date" />
      <CategorySelect :categories="categories" @changeCategory="changeCategory" :category="category"/>
      <input type="number" v-model="value" />
      <input type="button" value="Add" @click="addPayment" :disabled="value == 0"/>
    </form>
    <AddCategory/> 
  </div>
</template>

<script>
import CategorySelect from "./CategorySelect.vue";
import AddCategory from "./AddCategory.vue";
import {mapGetters} from 'vuex'
import { mapMutations } from 'vuex'

export default {
  name: "AddPayment",
  components: {
    CategorySelect,
    AddCategory,
  },
  data () {
    return {
      date: "",
      category: "",
      value: 0,
      showForm: false,
  }},
  
  watch: {},
  methods: {
    ...mapMutations([
      'addDataToPaymentsList',
    ]),
    addPayment() {
      // this.$emit('addNewPayment', {date: this.date, category: this.category, value: this.value});
      this.addDataToPaymentsList({date: this.date, category: this.category, value: this.value})
    },
    changeCategory(data){
      this.category = data;
    }
  },
  computed: {
    ...mapGetters({
      categories: 'getCategoryList',
    })
  },
  mounted() {
    
    if (this.$route.name == 'AddPayment') {
      this.showForm = true;
      this.category = this.$route.params.type;
      this.value = this.$route.query.value || 0;
      const today = new Date();
      let d = today.getDate();
      d = d < 10 ? '0' + d: d;
      let m = today.getMonth() + 1;
      m = m < 10 ? '0' + m: m;
      const y = today.getFullYear(); 
      this.date = `${y}-${m}-${d}`;
    }
    console.log(this.$route.params.type)
    
  }
  
};
</script>

<style lang="scss" scoped>
</style>
