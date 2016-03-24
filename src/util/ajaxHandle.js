var ajaxHander = function(ajax){
    this.ajax  = ajax;
    this.timer = null;
    this.timeouts = 9000;
    this.timeout();
};
ajaxHander.prototype = {
   cancel:function(){
      var _ajax = this.ajax;
      if(!_ajax) return;
      if(_ajax.readyState != 4 && _ajax.status != 200) {
          _ajax.abort();
      } else {
          console.log('ajax complete！')
      };
     if(this.timer) clearTimeout(this.timer);
   },
   timeout:function(){
      this.timer = setTimeout(function(){
          this.cancel();
          this.erroMsg('已超时');
      }.bind(this),this.timeouts);
   },
   erroMsg:function(msg){
       alert(msg);
   }
};

var AjaxHander = function(ajax){
   return new ajaxHander(ajax) ;
};

module.exports = AjaxHander;
