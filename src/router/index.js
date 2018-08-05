import Vue from 'vue'
import VueRouter from 'vue-router'
import Details from './details'
import Home from './home'
import Admin from './admin'
//WHEN using @ you needn't declare the component name in Details

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        Details,
        Home,
        Admin
    ]
})

