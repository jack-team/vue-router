
<template id="menu-page">
    <div class="detail-page" :class="class" v-html="detail">

    </div>
</template>

<script>
    var detailPage  = require('./../js/page/detailPage');
    module.exports = {
        data:function(){
            return {
                detail:'<div></div>',
                class:'',
            }
        },
        route:{
            data:function(transition){
                detailPage.pageScroll(window.Mscroll,this,transition);
            },
            activate: function (transition) {
                transition.next();
            },
            deactivate: function (transition) {
                detailPage.ajaxCancel();
                transition.next();
            }
        }
    }
</script>