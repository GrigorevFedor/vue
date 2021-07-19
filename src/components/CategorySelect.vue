<template>
  <div>
      <select v-model="selected" @change="changeCategory">
          <option v-for="(option, idx) in categories" :key="idx">
              {{option}}
          </option>
      </select>
  </div>
</template>

<script>

export default {
    name: "CategorySelect",
    props: {
        category: {
            type: String,
            default: ()=>''
        },
        categories: {
            type: Array,
            default: ()=>[]
        }
    },
    data(){
        return {
            selected: '',
        }
    },
    methods: {
        changeCategory() {
            this.$emit('changeCategory', this.selected);
        },
    },
    mounted(){
        if (!this.category == '') {
            this.selected = this.category;
        }
    }
}
</script>

<style>
</style>