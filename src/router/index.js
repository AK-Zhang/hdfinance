import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/homePage'
import transactions from '@/components/transactions'
import productCenter from '@/components/productCenter'
import customerService from '@/components/customerService'
import softDownload from '@/components/softDownload'
import aboutUs from '@/components/aboutUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: transactions
    },
    {
      path: '/productCenter',
      name: 'productCenter',
      component: productCenter
    },
    {
      path: '/customerService',
      name: 'customerService',
      component: customerService
    },
    {
      path: '/softDownload',
      name: 'softDownload',
      component: softDownload
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    }
  ]
})
