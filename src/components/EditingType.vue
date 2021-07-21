<template>
  <div>
     <button @click="editPayment">Edit</button>
     <button @click="deletePayment">Delete</button>
  </div>
</template>

<script>
export default {
    name: "EditPayment",
    props: {
        sett: null,    
    },
    
    methods: {
        editPayment() {
        
            this.$modal.hide();
            
            this.$modal.show('AddPayment',{header:"Edit payment", type: 'Edit', id: this.sett.id, item: this.sett.item})
        },
        deletePayment () {
            this.$store.commit('deleteDataFromPaymentsList', this.sett.id)
            this.$modal.hide();
        },      
    },
}
</script>