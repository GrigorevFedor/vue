<template>
  <div>
    <form action="">
      <input type="string" v-model="name" />
      <input type="button" value="Add new category" @click="addCategory" />
    </form>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  name: "AddCategory",
  components: {
    
  },
  data () {
    return {
      name: "",
  }},
  
  watch: {},
  methods: {
    ...mapMutations([
      'addNewCategoryToList',
    ]),
    addCategory() {
        this.addNewCategoryToList(this.name);
    }
  },
  
  
};
</script>

<style lang="scss" scoped>
</style>