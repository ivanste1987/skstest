import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AuthPage from '../views/AuthPage.vue'
import ThePostDescript from '../components/posts/ThePostDescript.vue'
/*Import store*/
import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AuthPage',
    component: AuthPage
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/post/:id',
    name: 'ThePostDescript',
    component: ThePostDescript
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, _, next) => {
  if (to.meta.require) {
    if (store.getters.checkUser) {
      next();
    } else {
      next("/");
    }
  } else {
    next();
  }
});


export default router
