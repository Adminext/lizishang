import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import PdfView from '@/views/PDFView.vue'


const originalPush = Router.prototype.push
   Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
   }

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/pdf',
      name: 'pdfView',
      component: PdfView
    }
  ]
})
