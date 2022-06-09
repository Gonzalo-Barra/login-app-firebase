import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'

import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import RecoverPassword from '../views/RecoverPassword.vue'
import Home from '../views/Home.vue'





Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',	
    component: Login
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path:'/recoverpassword',
    name:'RecoverPassword',
    component: RecoverPassword
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
      }
  },
  {
    path:'*',
    name: '404',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);


  if(requiresAuth && !currentUser) next('/');
  else if(!requiresAuth && currentUser) next('home');
  else next();
});


export default router
