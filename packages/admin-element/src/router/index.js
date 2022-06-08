import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import AddProduct from '@/views/AddProduct.vue'
import Login from '@/views/Login.vue'

const router = createRouter({
  history: createWebHashHistory(), // hash 模式
  routes: [
    {
      path: '/',
      component: Index,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/add',
      component: AddProduct,
      meta: {
        title: '新增商品'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        showMenu: false
      }
    }
  ]
})

export default router