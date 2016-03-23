/**
 * Created by jiangtao on 16/3/23.
 */
//全局iscroll
(function(root){
    var IScroll    = require('iscroll');
    var IscrollPage = function(options){
        this.handlers = {};
        this.initOptions = {
            pageEl:'body'
        };
        this.myScroll = null;
        this.startX   = 0;
        this.startY   = 0;
        this.options = this._mergeOptions(this.initOptions,options);
        this._init();
    };
    IscrollPage.prototype = {
        _init:function(){
            document.addEventListener('touchmove', function (e) {e.preventDefault();}, false);
            this._initIscroll();
        },
        _initIscroll:function(){
            var self = this;
            $(this.options.pageEl).height(this.options.pageHeight);
            this.myScroll =  new IScroll(this.options.pageEl,{
                probeType: 3,
                scrollbars: 'custom',
                mouseWheel: true,
                interactiveScrollbars: true,
                shrinkScrollbars: 'scale',
                fadeScrollbars: true,
                resizeScrollbars:true
            });
            this.myScroll.on('scroll',function(){
                self.pageRun(this);
            });
            setTimeout(function(){
                this.myScroll.refresh();
            }.bind(this),100);
        },
        pageRun:function(evt){
            var y = evt.y >> 0;
            var m = y - this.startY;
            if(m != 0 ) {
                if(m > 0 && m >= 2){
                    this.scrollDirection('down',-y);
                } else if (m < 0 && m <= -2 ){
                    this.scrollDirection('up',-y);
                };
            };
            this.startY = y;
            var maxY = -  evt.maxScrollY;
            if((maxY + y) <= this.options.buttomY){
                this.srollLoad();
            };
        },
        scrollDirection:function(d,y){
            if(y <= 0) return;
            this._emit('scrollDirection',{
                direction:d,
                y:y
            });
        },
        srollLoad:function(){
            this._emit('load');
        },
        _mergeOptions: function (oldObj, newObj) {
            for (var key in oldObj) {
                oldObj[key] = newObj[key];
            };
            return newObj;
        },
        on: function (eventType, handler) {
            if (!(eventType in this.handlers)) {
                this.handlers[eventType] = [];
            };
            this.handlers[eventType].push(handler);
            return this;
        },
        _emit: function (eventType) {
            var handlerArgs = Array.prototype.slice.call(arguments, 1);
            if (!this.handlers[eventType]) return;
            for (var i = 0; i < this.handlers[eventType].length; i++) {
                this.handlers[eventType][i].apply(this, handlerArgs);
            };
            return this;
        },
    }
    root.IScrollPage =  function(options){
        return new IscrollPage(options)
    }
})(window);

module.exports = IScrollPage;
