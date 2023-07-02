import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/home/home.vue')
    },
    {
      path: '/favor',
      name: 'favor',
      component: () => import('../views/favor/favor.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/order/order.vue')
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('../views/message/message.vue'),
      meta: {
        // 控制底部tabBar显示/隐藏
        hideTabBar: true
      }
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('../views/city/city.vue'),
      meta: {
        // 控制底部tabBar显示/隐藏
        hideTabBar: true
      }
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/search/search.vue'),
      meta: {
        hideTabBar: true
      }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('../views/detail/detail.vue')
    }
  ]
})

export default router