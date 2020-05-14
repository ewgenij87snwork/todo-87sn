import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Test from './components/Test.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
    },
  ],
});
