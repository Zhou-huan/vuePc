import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import store from './store'
import 'amfe-flexible'

import { Button } from 'element-ui';
Vue.use(Button);
import { Submenu } from 'element-ui';
Vue.use(Submenu);
import { MenuItem } from 'element-ui';
Vue.use(MenuItem);
import { Menu } from 'element-ui';
Vue.use(Menu);
import { Tree } from 'element-ui';
Vue.use(Tree);
/* import { DropdownMenu,Menu,MenuItemGroup,MenuItem,Submenu,Button } from 'element-ui'; */
/* import http from './util/http' */
/* import vueAxios from 'vue-axios' */

/* Vue.use(DropdownMenu,Menu,MenuItemGroup,MenuItem,Submenu,Button) */



/* Vue.use(vueAxios, http) */
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
