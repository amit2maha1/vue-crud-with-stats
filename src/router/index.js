import Vue from 'vue';
import VueRouter from 'vue-router';
import Create from '../views/Create.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/create',
  },
  {
    path: '/create',
    name: 'Create',
    component: Create,
  },
  {
    path: '/retrieve',
    name: 'Retrieve',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Retrieve.vue'),
  },
  {
    path: '/update',
    name: 'Update',
    component: () => import('../views/Update.vue'),
  },
  {
    path: '/delete',
    name: 'Delete',
    component: () => import('../views/Delete.vue'),
  },
  {
    path: '/stats',
    name: 'Stats',
    component: () => import('../views/Stats.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
