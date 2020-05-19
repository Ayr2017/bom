import  VueRouter  from "vue-router";
import Users from './components/Users';
import Welcome from './components/Welcome';
import Login from './components/Login';
import RegistrationGeneral from './components/RegistrationGeneral';
import RegistrationClient from './components/RegistrationClient';

export default new VueRouter({
    routes:[
        {
            path:'/',
            meta:{layout:'empty'},
            component: ()=>import('./components/Welcome.vue'),
        },
        {
            path:'/users',
            component: Users
        },
        {
            path:'/login',
            name:'login',
            meta:{layout:'empty'},
            component: ()=>import('./components/Login.vue'),
        },
        {
            path:'/registration',
            name: 'registration',
            meta:{layout:'main'},
            component: ()=>import('./components/Registration.vue'),
        },
        {
            path:'/registration-client',
            name: 'registration-general',
            meta:{layout:'main'},
            component: ()=>import('./components/RegistrationClient.vue'),
        },
    ],
    mode: 'history'
})