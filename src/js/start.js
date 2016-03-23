var Vue       = require('vue');
var VueRouter = require('vue-router');
var vueConfig = require('./router-config');

Vue.use(VueRouter);

var App = require('./../template/app.vue');

var router = new VueRouter();

vueConfig(router)

router.start(App, '#app');











