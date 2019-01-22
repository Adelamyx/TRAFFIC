import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const scrollBehavior = (to, from, savedPosition) => {
  console.log(to, from, savedPosition)
  if (savedPosition) {
    return savedPosition
  } else {
    const position = {}
    if (to.hash) {
      position.selector = to.hash
    }
    if (to.matched.some(m => m.meta.scrollToTop)) {
      position.x = 0
      position.y = 0
    }
    return position
  }
}

const router = new Router({
  mode: 'history',
  base: '/p/',
  scrollBehavior,
  routes
})
console.log(routes, router)
export default router
