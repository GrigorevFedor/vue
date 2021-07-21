<template>
  <div class="payments-list">
     <div v-for="(item, idx) in list" :key="idx">
        {{ item.id }}-{{ item }}
        <button @click="onClick(idx, item)">...</button>
        
     </div>
  </div>
</template>

<script>
export default {
    name: "PaymentsDisplay",
    props: {
        list: {
            type: Array,
            default: ()=>[]
        }
    },
    data(){
        return {

        }
    },
    methods: {
        onClick(id, item) {
            this.$modal.show('EditingType',{header:"Choose option", id: id, item: item})
        }
    }
}
</script>