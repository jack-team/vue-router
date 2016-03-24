require('zepto/zepto.min.js');
var ajaxHander = require('./../../util/ajaxHandle');
var ajaxState = true;
var Page = {
    ajax: null,
    timeOuter: null,
    ajaxCancel: function () {
        Page.timeOuter.cancel();
    },
    pageScroll: function (target, page , transition) {
        setTimeout(function () {
            target.myScroll.scrollTo(0,0);
            target.myScroll.refresh();
            Page.sendAjax(target, page);
            target.on('load', function () {
                Page.sendAjax(target, page);
            });
        }, 50)
    },
    sendAjax: function (t, p) {
        if (!ajaxState) return;
        Page.ajax = $.ajax({
            type: 'get',
            url: 'http://172.16.129.35:8085/list',
            success: function (data) {
                data.forEach(function (val, index) {
                    p.data.push(val)
                });
                setTimeout(function () {
                    p.class = 'move-center';
                    t.myScroll.refresh();
                    ajaxState = true;
                    t.loadState = true;
                    Page.timeOuter.cancel();
                }.bind(this), 50);
            },
            error: function () {
                t.loadState = true;
            }
        });
        Page.timeOuter = ajaxHander(Page.ajax);
    }
};

module.exports = Page;

