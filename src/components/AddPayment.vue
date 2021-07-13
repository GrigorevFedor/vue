<template>
  <div>
    <button @click="showForm = !showForm">Add new cost</button>
    <form v-if="showForm" action="">
      <input type="date" v-model="date" />
      <CategorySelect :categories="categories" @changeCategory="changeCategory"/>
      <input type="number" v-model="value" />
      <input type="button" value="Add" @click="addPayment" />
    </form>
    <AddCategory/> 
  </div>
</template>

<script>
import CategorySelect from "./CategorySelect.vue";
import AddCategory from "./AddCategory.vue";
import {mapGetters} from 'vuex'

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
    addPayment() {
      this.$emit('addNewPayment', {date: this.date, category: this.category, value: this.value});
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
  
};
</script>

<style lang="scss" scoped>
</style>
