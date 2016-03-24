require('zepto/zepto.min.js');
var ajaxHander = require('./../../util/ajaxHandle');
var Page = {
    ajaxData:null,
    timeOuter:null,
    ajaxCancel:function(){
       if( Page.timeOuter) Page.timeOuter.cancel();
    },
    pageScroll:function(target,page,transition){
        setTimeout(function(){
            target.off('load');
            target.myScroll.scrollTo(0,0);
            target.myScroll.refresh();
            page.class = 'move-center';
            Page.ajax(target,page);
        },50)
    },
    ajax:function(t,p){
       Page.ajaxData = $.ajax({
            type:'get',
            url: 'http://172.16.129.35:8085/test/main',
            success:function(data){
                p.detail = data;
                setTimeout(function(){
                    p.class = 'move-center';
                    t.myScroll.refresh();
                    Page.ajaxCancel();
                }.bind(this),50)
            }
        });
        Page.timeOuter = ajaxHander(Page.ajaxData);
    }
};

module.exports = Page;
