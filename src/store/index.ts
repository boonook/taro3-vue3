import { createStore } from "vuex";
import auth from './model/auth';
import menu from './model/menu'
const store = createStore({
  modules:{
    auth,
    menu
  }
})
export default store;
