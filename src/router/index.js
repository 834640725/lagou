import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import lgIndex from '@/views/index'
import jobInfo from '@/views/jobInfo/jobInfo'

let router = new VueRouter({
   mode:'history',
   routes:[
     {
       path:'/',
       component:lgIndex,
     },
     {
       path:'/job/:userId',
       component:jobInfo,
     },
     {
       path:"*",
       redirect:'/'
     }
   ]
});

export default router
