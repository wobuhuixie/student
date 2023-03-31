import Vue from 'vue'
import App from './App.vue'
//引入全局css样式
import './style/index.css'
//引入路由
import VueRouter from 'vue-router';
import router from './router';
//引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入Vue-AnimateNumber
import VueAnimateNumber from 'vue-animate-number';

//引入Vuex
import Vuex from 'vuex'
import store from './store';

Vue.config.productionTip = false
//使用路由插件
Vue.use(VueRouter)
//使用ElementUI插件
Vue.use(ElementUI)
//使用Vuex状态管理
Vue.use(Vuex)
//使用Vue-AnimateNumber
Vue.use(VueAnimateNumber);

// router.beforeEach((to,from,next)=>{
// 	if(to.meta.isAuth){
// 		if(JSON.parse(localStorage.getItem('user')) == "admin"){
// 			next()
// 		}else{
// 			next({path:'/'})
// 		}
//   }else{
//     next()
//   }
// })

// router.beforeEach((to, from, next) => {
//   if (to.meta.title) {
//     document.title = to.meta.title
//   }
//   next()
//   // 判断用户是否已登录
//   let user = localStorage.getItem('user')   //先获取本地存储的userID
//   if (user) {
//     // 已登录，继续路由跳转
//     next()
//   } else {
//     // 未登录，跳转到登录页面
//     if (to.path === '/') {
//       // 如果是跳转到登录页面，则继续路由跳转
//       next()
//     } else {
//       // 如果不是跳转到登录页面，则跳转到登录页面
//       next('/')
//     }
//   }
// })

router.beforeEach((to, from, next) => {
  // 显示每个路由的title
   if (to.meta.title) { 
    document.title = to.meta.title 
  }
  // 获取本地存储里的userID，
  // 如果未登录且不是跳转到登录页面  则跳转到登录页面
  let user = localStorage.getItem('user') 
  if (!user && to.path !== '/') { 
    next('/') 
  }else{
    next()
  }
})

new Vue({
  render: h => h(App),
  router:router,
  store
}).$mount('#app')
