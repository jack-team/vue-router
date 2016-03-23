
function vueConfig(router){
    router.map({
        '/home': {
            name:'home',
            component: require('./../template/home.vue')
        },
        '/menu': {
            name:'menu',
            component: require('./../template/menu.vue')
        },
        '/detail/:id': {
            name:'detail',
            component: require('./../template/detail.vue')
        }
    });
};

module.exports = vueConfig;
