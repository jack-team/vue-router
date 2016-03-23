/**
 * Created by jiangtao on 16/3/23.
 */
(function(root){
    var localStorageUtil = new Function();
    localStorageUtil.prototype = {
        get:function(key){
            if(!key) return;
            var val = JSON.parse(localStorage.getItem(key));
            return val;
        },
        set:function(key,val,updateTime){
            if(!key) return;
            var setTime = this.get(key) ? this.get(key).setTime : 0 ;
            var update  = new Date().getTime() - setTime;
            if(update - updateTime <= 0) return;
            this.remove(key);
            var val = {
                setTime:new Date().getTime(),
                item:val
            };
            val = JSON.stringify(val);
            localStorage.setItem(key,val);
        },
        remove:function(key){
            localStorage.removeItem(key);
        }
    };
    root.Storage = function(){
        return new localStorageUtil();
    };
})(window);

module.exports = Storage;