import Vue from 'vue'
import Router from 'vue-router'
import AddPayment from '../components/AddPayment.vue'

Vue.use(Router)

const router =  new Router({
    mode: 'history',
    routes: [   
        {
            path:'/',
            component: AddPayment,
            name: 'AddPayment'
        },
        
        {
            path:'/add/payment/:type',
            component: AddPayment,
            name: 'AddPayment'
        },
        
    ]
})

// const isAuth = false

// router.beforeEach((to, from, next)=>{
//     if (to.name !== 'NotFound' && !isAuth) {
//         next({path: '/notfound'})
//     }else{
//         next()
//     }
//     console.log(to, from, next)
// })

// router.beforeResolve((to, from, next)=>{
//     console.log(to, from, next)
//     debugger
// })


// const getTitle = routName => {
//     return {
//     'dashboard': 'Take a look on your payments and add more!',
//     'about': 'Anything about our awesome application!',
//     'NotFound': 'Oops! Seems like we lost this page :('
//     }[routName]
// }

// router.afterEach((to)=>{
//     document.title =getTitle(to.name)
// })

export default router