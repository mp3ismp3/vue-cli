import {
  createStore
} from 'vuex';
import {
  MessageModule
} from './Message';
import {
  UserModule
} from "./User";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    User: UserModule,
    Message: MessageModule,
  }
})