import Vue from 'vue'
let MyPlugin = {};

MyPlugin.install = function(Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
        Vue.prototype.web_api_url = "http://blog.app/api/"
    }
    // 2. 添加全局资源
    Vue.directive('my-directive', {
        bind (el, binding, vnode, oldVnode) {
            // 逻辑...
        }
    
    })
    // 3. 注入组件
    Vue.mixin({
        created: function () {
        // 逻辑...
            Vue.myGlobalMethod();
        }
    })
    // 4. 添加实例方法
    Vue.prototype.$myMethod = function (methodOptions) {
        // 逻辑...
    }
}
export default MyPlugin;