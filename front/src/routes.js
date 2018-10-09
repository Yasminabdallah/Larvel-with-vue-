import Vue from 'vue'
import VueRouter from 'vue-router'
import login from './components/login.vue'
import register from './components/register.vue';
 
//hna bn3ml use l package bt3t routing 
Vue.use(VueRouter)


const router =new VueRouter({
    //mode history 3lshan lma kna bnro7 l login page kan  bykon shakl routes 
    // /#/login f 3lshan nshel hashtag da  3mlna mode history
    mode:'history',
    //hna han3rf kol routes bt3tna 
    routes:[
        {
        path: "/login" ,
        component: login
        },
        {
            path: "/register" ,
            component: register
        }
    ]
})

export default router
