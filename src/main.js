// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// vue图片懒加载
import VueLazyLoad from "vue-lazyload";
/* import {
  sum,
  minus
} from './util' */

Vue.config.productionTip = false

// console.log(`sum:${sum(1,6)}`);
// console.log(`minus:${minus(10,6)}`);
/* eslint-disable no-new */

Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  loading: '/static/loading-svg/loading-bars.svg',
  attempt: 1
});
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
