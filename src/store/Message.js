export const MessageModule = {
    namespaced: true,

    state: {
        message: null
    },

    // Mutations are functions that effect the STATE.
    mutations: {
        SET_USER(state, message) {
            state.message = message;
        }
    },

    // Actions are functions that you call throughout your application that call mutations.
    actions: {
        setUser({
            commit
        }, message) {
            commit('SET_USER', message);
        }
    }
}