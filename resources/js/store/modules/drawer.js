// import axios from 'axios';
export default {
    state: {
        drawerState: false
    },
    getters: {
        getDrawerState (state){
            return state.drawerState;
        }
    },
    mutations: {
        changeDrawerState(state,value) {
            state.drawerState = value;
        },
    },
    actions: {
        showDrawer(ctx) {
            ctx.commit('changeDrawerState', true);
        },
        hideDrawer(ctx) {            
            ctx.commit('changeDrawerState', false);
        },
    }
}
