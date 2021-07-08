<template>
  <div class="pagination-wrp">
    <div v-for="idx in count" :key="idx">
         <button @click="changePage(idx)">{{idx}}</button>
     </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data () {
    return {
    
  }},
  props: {
    count: {
    type: Number,
    default: ()=>0,
  }
,
    
},

  methods: {
      changePage(idx) {
          this.$emit('changePage', idx);
      }
  }
};
</script>


<style scoped lang="scss">
    .pagination-wrp {
        display: flex;
    }
</style>
