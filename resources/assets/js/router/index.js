import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// ... other imports
import Index from '@/components/Index'
import About from '@/components/About'

export default new Router({
    mode: 'history', // use HTML5 history instead of hashes
    routes: [
        // all routes
        {
          path: '/',
          name: 'Index',
          component: Index
        },
        {
          path: '/about',
          name: 'About',
          component: About
        },
    ]
})
