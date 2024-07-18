import Vue from 'vue'

import App from './App.vue'

//引入插件
import plugins  from './plugins'

Vue.config.productionTip = false
Vue.use(plugins)//使用插件
new Vue({
    el: '#App',
    render: h => h(App)
})