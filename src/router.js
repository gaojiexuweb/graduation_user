import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Header.vue'
import Price from './components/price.vue'
import Order from './components/order.vue'
import Inquiry from './components/Inquiry.vue'
import MspB from './components/mapb.vue'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {path: '/', redirect: '/index'},
    {path:'/index',name:'index',component:Index},
    {path:'/price',name:'price',component:Price},
    {path:'/order',name:'order',component:Order},
    {path:'/mapb/:receivingAddress',name:'mapbp',component:MspB},
    {path:'/inquiry',name:'inquiry',component:Inquiry}
  ]
})
