var Vue       = require('vue');

var VueRouter = require('vue-router');

var vueConfig = require('./router-config');

var fastclick = require('fastclick');

var InitPage  = require('./../util/initPage');

fastclick.attach(document.body);

InitPage('#view-page');

Vue.use(VueRouter);

var App = Vue.extend({});

var router = new VueRouter({
    history: true,
    saveScrollPosition: true
});

vueConfig(router);

router.start(App, '#app',function(e){

});

router.app.$set('show',true);

router.go('/home');














