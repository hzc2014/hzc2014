'use strict';
/**
 * Created by fy on 14-9-2.
 */
var $ = (window.$ || function () {

});

var imp = (window.impress || function () {
    return{
        init: function () {
        },
        next: function () {
        }
    };
})();

imp.init();

$(function () {
    var impressInterval = window.setInterval(function () {
        if (imp.next() === $('#overview').get(0)) {
            $('#impress_link_id').remove();
//            $('#impress_script_id').remove();
            $('#impress_main_id').hide(2000, function () {
                $(this).remove();
            });
            $('body').removeClass('impress-supported impress-enabled impress-on-bored').css('overflow', 'auto');
            $('#main').show();
            window.clearInterval(impressInterval);
        }
    }, 2500);
});
