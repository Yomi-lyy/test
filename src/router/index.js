import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import First from '@/components/First.vue'
import Edit from '@/components/Edit.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/params/:forid',
      name: 'First',
      component: First
    },
    {
      path: '/',
      name: 'Edit',
      component: Edit
    }
  ]
})
