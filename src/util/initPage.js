function init(el){
    require('zepto/zepto.min.js');
    var IscrollPage = require('./../util/iscrollPage');
    if(!window.Mscroll){
        window.Mscroll  = IscrollPage({
            pageEl:el,
            pageHeight:$(window).height() - $('.app-nav').height(),
            buttomY:$(window).height() * 0.4 >> 0
        });
    };
    window.Mscroll.off('load');
    return window.Mscroll;
};
module.exports = init;

