/*
该文件是整个项目的入口文件
*/
//引入vue
import Vue from 'vue'
//引入app组件。他是所有组件的父组件
import App from './App.vue'
//关闭生产提示
Vue.config.productionTip = false
// 关于不同版本的Vue:
// 1.vue.js与vue.runti面e.xxx.js的区别:
// (1).vue.js是完整版的Vue，包含:核心功能+模板解析器。
// (2).vue.runtime.xxx.js是运行版的Vue，只包含:核心功能;没有板解析器
// 2.因为vue.runtime.xxx.js没有板解析器，所以不能使用template配置项，需要使用
// render函数接收到的createElement的数去指定具体内容。
//创建vue实例对象--vm
new Vue({
  el: '#App',
  //将app组件放入容器，下面这行代码一会解释，完成了这个功能:将App组件放入容器中
  render: h => h(App),
})
// .$mount('#App')
// 
