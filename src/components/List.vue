<template>
  <div class="">
    <div v-for="(item, idx) in items.slice((page - 1) * 5, (page) * 5)" :key="idx">
         {{idx + 1}}-{{ item }}
     </div>
     Page: {{page}} 
  </div>
  
</template>

<script>
export default {
  name: "List",
  data () {
    return {
    
  }},
  props: {
    items: {
      type: Array,
      default: ()=>[],
    },
    page: Number,
  },

  methods: {
    
  }
};
</script>


<style scoped lang="scss">
</style>
