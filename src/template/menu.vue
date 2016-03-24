<template id="menu-page">
    <div class="view-page-3" :class="class">

    </div>
</template>

<script>
    var menuPage  = require('./../js/page/menuPage');
    module.exports = {
        data:function(){
            return {
                data:[],
                class:'',
            }
        },
        route:{
            data:function(transition){
                menuPage.pageScroll(window.Mscroll,this,transition);
                this.$parent.$set('show',false);
            },
            activate: function (transition) {
                transition.next();
            },
            deactivate: function (transition) {
                transition.next();
            }
        }
    }
</script>