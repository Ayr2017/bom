import  VueRouter  from "vue-router";
import Users from './components/Users';
import Welcome from './components/Welcome';

export default new VueRouter({
    routes:[
        {
            path:'/',
            component: Welcome
        },
        {
            path:'/users',
            component: Users
        },
    ],
    mode: 'history'
})