import { createStore } from 'vuex'

export const userStore = createStore({
    namespaced: true,
    state () {
        return {
            userName: 'imsi user name',
            userAge: '29'
        }
    },
    mutations: {
        setName(state, value) {
            state.userName = value;
        },
        setAge(state, value) {
            state.userAge = value;
        }
    },
    actions: {
        //비동기 호출(2초 뒤 나이가 + 1)
        // TIME({commit}) {
        //     return setTimeout(() => {
        //         commit('setAge', this.userAge + 1);
        //     }, 2000);
        // }
    },
    getters: {}
});

export default userStore;