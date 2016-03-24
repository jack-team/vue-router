var ajaxHander = require('./../../util/ajaxHandle');

var Page = {
      pageScroll:function(target,page,transition){
          setTimeout(function(){
              target.off('load');
              target.myScroll.refresh();
              page.class = 'move-center';
          },50)

      },
      ajax:function(){

      }
};
module.exports = Page;
