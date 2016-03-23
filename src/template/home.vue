<!--首页-->
<template id="home-page">
    <div class="view-page-2" :class="class">
        require('.')
        <!--<item :item-list="data"></item>-->
    </div>
</template>

<script>
    module.exports = {
        data:function(){
            return {
               data:[]
            }
        },
        route:{
            data:function(transition){

            },
            activate: function (transition) {
                transition.next();
            },
            deactivate: function (transition) {
                transition.next();
            }
        },
    }
</script>