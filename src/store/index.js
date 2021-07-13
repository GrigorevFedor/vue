import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex)
 
export default new Vuex.Store({
    state: {
        paymentsList: [],
        categoryList: []
    },
    mutations: {
        setPaymentListData(state, payload) {
            state.paymentsList = payload
        },
        addDataToPaymentsList(state, payload) {
            state.paymentsList.push(payload)
        },
        setCategoryList(state, payload) {
            state.categoryList = payload
        },
        addNewCategoryToList(state, payload) {
            state.categoryList.push(payload);
        }
    },
    getters: {
        getPaymentList: state => [...state.paymentsList, [1,2,3,]],

        getFullPyamentValue: state =>{
            return state.paymentsList.reduce((res, cur)=> res + cur.value, 0)
        },
        getCategoryList: state=>state.categoryList
    },
    actions: {
        fetchData({commit}){
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    const items = []
                    for(let i= 1; i< 50; i++){
                        items.push({
                            date: "23.12.2020",
                            category: "Sport",
                            value: i
                        })
                    }
                    resolve(items)
                },2000)
            }).then(res=>{
                commit('setPaymentListData', res)
            })
        },
        fetchCategory({commit}){
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve(['Food', 'Sport', 'Education', 'Auto', 'Health', 'Family'])
                },1000)
            }).then(res=> {
                commit('setCategoryList', res)
            })
        }
    },
      
})
