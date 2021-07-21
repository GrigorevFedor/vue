<template>
  <div>
      <input v-model="date" placeholder="date" />
      <input v-model.trim="category" placeholder="category"/>
      <input v-model.number="value" type="number" placeholder="value"/>
      <button @click="onClick">
        {{sett.type}}
      </button>
  </div>
</template>

<script>
import { mapMutations, } from "vuex";

export default {
    name: "AddPayment",
    props: {
        sett: null,
    },
    data(){
        return {
            date: "",
            category: "",
            value: null,
            type: "add",
            id: Number,
        }
    },
    methods: {
        ...mapMutations(["editDataFromPaymentsList", ]),
        goToPageDashboard(){
                this.$router.push({
                    name: 'dashboard'
                })
        },
        onClick(){
          
          if (this.sett.type == 'add') {
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

            // this.$emit('addNewPayment', data)
          } else {
              const data = {
                date: this.date,
                category: this.category,
                value: this.value,
                id: this.id
                }
                this.$store.commit('editDataFromPaymentsList', data)
          }
        },
       
    },
    computed: {
        
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
        },

    },
    created(){
        console.log(this.$attrs)
        
        
        // debugger
        // if((!this.getValueQueryFromRoute || !this.getCategoryParamsFromRoute) && this.$route.name !== 'dashboard'){
            if (this.sett.id) {
                this.value = this.sett.item.value
                this.category = this.sett.item.category
                this.date = this.sett.item.date
                this.id =  this.sett.id
            }
        //     this.goToPageDashboard()
           
        // }else{
        //     this.category = this.getCategoryParamsFromRoute
        //     this.value = this.getValueQueryFromRoute  
        // }
    }
}
</script>