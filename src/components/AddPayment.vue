<template>
  <v-card class="py-4 px-4" elevation="10">
      <v-text-field v-model="date" label="Date" placeholder="date" />
      <v-select v-model="category" label="Category" :items="categoryList" />
      <v-text-field v-model.number="value" type="number" placeholder="value"/>
      <v-card-actions>
        <v-btn color="teal" dark @click="onClick">Add</v-btn>
      </v-card-actions>      
  </v-card>
</template>

<script>
export default {
    name: "AddPayment",
    data(){
        return {
            date: "",
            category: "",
            value: null
        }
    },
    methods: {
        goToPageDashboard(){
                this.$router.push({
                    name: 'dashboard'
                })
        },
        onClick(){
            const { category, value } = this
            const data = {
                date: this.date || this.getCurrentDate,
                category,
                value
            }
            console.log('add', data)
            //Вызов события, название события и аргументы
            if(this.getValueQueryFromRoute && this.getCategoryParamsFromRoute) {
                this.$store.commit('addDataToPaymentsList', data)
                this.goToPageDashboard()
                return
            }

            this.$emit('addNewPayment', data)
        }
    },
    computed: {
        categoryList(){
            return this.$store.getters.getCategoryList
        },
        getCurrentDate() {
            const today = new Date()
            const d = today.getDate()
            const m = today.getMonth() + 1
            const y = today.getFullYear()
            return `${d}.${m}.${y}`
        },
        getValueQueryFromRoute(){
            return Number(this.$route.query?.value) ?? null
        },
        getCategoryParamsFromRoute(){
            return this.$route.params?.category ?? null
        }
    },
    created(){

        if((!this.getValueQueryFromRoute || !this.getCategoryParamsFromRoute) && this.$route.name !== 'dashboard'){
            this.goToPageDashboard()
        }
        this.category = this.getCategoryParamsFromRoute
        this.value = this.getValueQueryFromRoute
    }
}
</script>