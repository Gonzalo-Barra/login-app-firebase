import Vue from "vue";
import App from "./App.vue";
import {firebaseApp} from './firebase/firebaseInit.js'
import router from "./router";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);

import { BootstrapVue, IconsPlugin, BootstrapVueIcons  } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
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
