import Vue from 'vue'
import Router from 'vue-router'
import Start from './views/Start.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start
    },
    {
      path: '/question/:id',
      name: 'question',
      // Edge case:
      // If we land directly on a question from outside the app, make sure to redirect to home
      beforeEnter: (to, from, next) => {
        if (from.name !== 'start') {
          next('/')
        } else {
          next()
        }
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "question" */ './views/Question.vue')
    },
    {
      path: '/summary',
      name: 'summary',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "summary" */ './views/Summary.vue')
    }
  ]
})
