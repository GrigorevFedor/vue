import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paymentsList: [],
    categoryList: [],
  },

  mutations: {
    setPaymentListData(state, payload) {
      debugger
      state.paymentsList = [...state.paymentsList,...payload];
    },
    addDataToPaymentsList(state, payload) {    
      payload.id = state.paymentsList.length + 1
      state.paymentsList.push(payload);
    },
    setCategoryList(state, payload) {
      state.categoryList = payload;
    },
    deleteDataFromPaymentsList(state, payload) {
      // console.log(payload)
      // state.paymentsList.forEach((el, index)=>{
      //   debugger
      //   if (el.id == payload) {
      //     debugger
          state.paymentsList.splice(payload, 1);

        // }
      // }
      // );
    },
    editDataFromPaymentsList(state, payload) {
      let item = state.paymentsList.find((el)=>{
        if (el.id == payload.id) {
          return true;
        }
      });
      item.value = payload.value;
      item.category = payload.category;
      item.date = payload.date;
    },
    addCategory(state, payload){
      state.categoryList.push(payload)
    }
  },

  actions: {
    fetchData({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = [];
          for (let i = 1; i < 2; i++) {
            items.push({
              date: "2020-12-23",
              category: "Sport",
              value: i,
              id: i,
            });
          }
          resolve(items);
        }, 1000);
      }).then((res) => {
        commit("setPaymentListData", res);
      });
    },
    fetchCategory({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(["Food", "Sport", "Education", "Auto", "Health", "Family"]);
        }, 500);
      }).then((res) => {
        commit("setCategoryList", res);
      });
    },
  },

  getters: {
    getPaymentList: (state) => state.paymentsList,

    getFullPyamentValue: (state) => {
      return state.paymentsList.reduce((res, cur) => res + cur.value, 0);
    },
    getCategoryList: (state) => state.categoryList,
    getGroupedValues: (state) => {
      
      const tempOb = {}
      const valuesObj = {
        labels: [],
        datasets: [
          {
            label: 'Data one',
            data: [],
            backgroundColor: [],
          }
        ]
      }
      state.paymentsList.forEach((el)=>{
        if (tempOb[el.category]!= undefined) {
          tempOb[el.category]+=parseInt(el.value)  
        } else {
          tempOb[el.category] = parseInt(el.value)
        } 
      }) 
      valuesObj.labels = Object.keys(tempOb)
      const getRandomColor = function() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;  
      }
      valuesObj.datasets[0].data = Object.values(tempOb)
      for (let i=0; i<Object.values(tempOb).length;i++){
        valuesObj.datasets[0].backgroundColor.push(getRandomColor())  
      }
      
      return valuesObj 
    }
  },
});
