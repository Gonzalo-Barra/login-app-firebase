import Vue from "vue";
import App from "./App.vue";
import {firebaseApp} from './firebase/firebaseInit.js'
import router from "./router";
import { BootstrapVue, IconsPlugin, BootstrapVueIcons  } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(BootstrapVueIcons)


Vue.config.productionTip = false;


 // Initialize Firebase
 const firebase = firebaseApp


firebase.auth().onAuthStateChanged(function(){ 
      new Vue({
      router,
      render: (h) => h(App),
    }).$mount("#app");
});
