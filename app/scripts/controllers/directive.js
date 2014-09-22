'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:BindingCtrl
 * @description
 * # BindingCtrl
 * Controller of the angularTestApp
 */
var app = angular.module('angularTestApp');

app.directive('hzcimpress', function () {
    var impressInit = function () {
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

            /**
             * impress.js progress bar1
             * @type {*|Function|HTMLElement}
             */
            var webLoadingDiv = $('#web_loading div');
            webLoadingDiv.animate({width: '1%'});//init progress
            webLoadingDiv.animate({width: '100%'}, 10000, function () {
            });

            /**
             *impress switch
             */
            $('#canvasloader-container').remove();//destroy flush cion
            function jumpOver() {
                webLoadingDiv.fadeOut(500);
                $('#impress_link_id').remove();
                $('#impress_main_id').remove();
                $('body').removeClass('impress-supported impress-enabled impress-on-bored').css('overflow', 'auto');
                $('#main').show();
                window.clearInterval(impressInterval);
            }

            var impressInterval = window.setInterval(function () {
                if (imp.next() === $('#overview').get(0)) {
                    jumpOver();
                }
            }, 100);
        });
    };
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        templateUrl: 'views/impress.html',
        compile: impressInit
    };
});

/*------------------------导航*/
app.directive('hzcnav', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        templateUrl: 'views/nav.html',
        link:function(scope,element,attr){
            element.bind('mouseenter',function(){
               $(this).find("li").mouseenter(function(){
                   $(this).attr("class","active");
               }).mouseout(function(){
                   $(this).removeAttr("class");
               })
            })
        }
    };
});
/*------------------------------页脚*/
app.directive('hzcfooter', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        templateUrl: 'views/footer.html'
    };
});
/*--------------------------------首页公司介绍*/
app.directive('hzcmine',function(){
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        templateUrl: 'views/main/introduce.html'
    };
})
/*-----------------------------联系我们*/
app.directive('hzcmainconcat', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        templateUrl: 'views/main/concat.html'
    };
});
/*-------------------------------首页图片*/
app.directive('hzcmainbanner', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        templateUrl: 'views/main/banner.html'
    };
});



