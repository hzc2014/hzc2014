'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:BindingCtrl
 * @description
 * # BindingCtrl
 * Controller of the angularTestApp
 */
var app = angular.module('angularTestApp');

app.directive('impress', function () {
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
            $('#canvasloader-container').remove();
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
    };
    return {
        restrict:'E',
        replace:true,
        scope:{},
        templateUrl:'/views/impress.html',
        compile: impressInit
    };
});

app.directive('nav', function () {
    function navInit() {
        var $ = (window.$ || function () {
        });
        var $navTop = $('#topNav'), $navMain = $navTop.find('#navMain'), $navSub = $navMain.find('#navSub'), $navIndex = $navMain.find('#navIndex'), de = 200;
        $navIndex.mouseenter(function () {
            $navSub.show().stop().animate({
                'height': '187px'
            }, de);
            $navTop.stop().animate({
                'height': '242px'
            }, de);
        });
        $navMain.mouseleave(function () {
            $navSub.stop().animate({
                'height': '3px'
            }, de, function () {
                $navSub.hide();
            });
            $navTop.stop().animate({
                'height': '75px'
            }, de);
        });
        $navIndex.find('li:not(:eq(0))').mouseenter(function () {
            var $this = $(this), i = $this.index() - 1;
            $(this).addClass('nav3').siblings().removeClass('nav3');
            $navSub.find('dt:eq(' + i + ')').show();
        }).mouseleave(function () {
            var $this = $(this), i = $this.index() - 1;
            $this.removeClass('nav3');
            $navSub.find('dt:eq(' + i + ')').hide();
        });
        $navSub.find('dl').hover(function () {
            var $this = $(this), i = $this.index() + 1;
            $this.find('dt').show();
            $navIndex.find('li:eq(' + i + ')').addClass('nav3');
        }, function () {
            var $this = $(this), i = $this.index() + 1;
            $this.find('dt').hide();
            $navIndex.find('li:eq(' + i + ')').removeClass('nav3');
        });
    }
    return {
        restrict:'E',
        replace:true,
        scope:{},
        templateUrl:'/views/nav.html',
        compile: navInit
    };
});


