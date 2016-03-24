<!--首页-->
<template id="home-page">
    <div class="view-page-2" :class="class">
        <a v-for="list in data" class="item-list" v-link="{name: 'detail', params:{id:list.id},activeClass:'s-link-active'}">
            <div class="item-image">
                <img :src="list.imgUrl" :alt="list.itemTitle">
            </div>
            <div class="item-content">
                <div class="title" v-text="list.itemTitle"></div>
                <div class="time" v-text="list.itemTime"></div>
                <div class="address" v-text="list.itemAdress"></div>
                <div class="money"><span v-text="list.money"></span>元起</div>
            </div>
        </a>
    </div>
</template>
<script>
    var homePage  = require('./../js/page/homePage');
    module.exports = {
        data:function(){
            return {
               data:[],
               class:""
            };
        },
        route:{
            data:function(transition){
                homePage.pageScroll(window.Mscroll,this,transition);
            },
            activate: function (transition) {
                transition.next();
            },
            deactivate: function (transition) {
                homePage.ajaxCancel();
                transition.next();
            }
        }
    }
</script>