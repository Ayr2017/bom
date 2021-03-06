import Vue from 'vue';
import Vuex from 'vuex';

import users from './modules/users'
import drawer from './modules/drawer'

Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
        users,
        drawer
    }
})