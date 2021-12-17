import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/pages/Main'
import NotFound from '@/views/404/NotFound'
import Profile from '@/pages/Profile'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/?email-confirmation=:id',
    name: 'Activate',
    component: Main
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '*',
    name: '404',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

function hasQueryParams (route) {
  return !!Object.keys(route.query).length
}

router.beforeEach((to, from, next) => {
  if (!hasQueryParams(to) && hasQueryParams(from)) {
    next({ name: to.name, query: from.query })
  } else {
    next()
  }
})

export default router
