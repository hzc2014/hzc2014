'use strict';

/**
 * @ngdoc function
 * @name HzcWebSite.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the HzcWebSite
 */
angular.module('HzcWebSite')
    .controller('MainCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    })
    .controller('index_say_ctrl', ['$rootScope', '$scope', '$timeout', function ($rootScope, $scope) {
        $scope.myInterval = 11;
        $scope.slides = [
            {image: 'https://dn-wtbox.qbox.me/img/uservoice/maning.png', name: '尹彬', title: 'ejCode创始人', text: ['游戏开发需要高效的沟通和配合，在Worktile，一切任务都在拖拖拽拽中搞定，', '一切通知和提醒都及时送达，没有学习成本，只有高效协作。', '简单方便，是我们选择Worktile最重要的理由。'].join('')},
            {image: 'https://dn-wtbox.qbox.me/img/uservoice/ziyan.png', name: '刘金云', title: '微软MVP', text: ['我一直在寻找一款适合我们团队使用的协同工具，但因为各种原因最后都放弃了，', '直到用上Worktile，才感觉找到了我的真爱，', '我愿意把它推荐给我们身边每一位有团队协同需求的朋友。'].join('')},
            {image: 'https://dn-wtbox.qbox.me/img/uservoice/liuyi.png', name: '谢连军', title: '设计行业', text: ['及时快捷的通知，无处不在的关注，还有简单易用的话题，让团队沟通畅通无阻。', '例如，一个小细节是，通过邮件直接回复即可参与评论和话题，也可以通过邮件创建任务，', '这简直太爽了。赶紧上线移动端吧，等不急了。'].join('')},
            {image: 'https://dn-wtbox.qbox.me/img/uservoice/emma.png', name: '空缺', title: '不会编码的IT人士', text: ['作为一名ProjectManager，我用过各种项目管理工具，要么太复杂，要么体验太差。', 'Worktile足够简单，完全满足我对于项目管理的需求，而且体验也超级棒，', '最喜欢Worktile中的拖拽操作，太酷了。'].join('')}
        ];
//        $scope.format = 'M/d/yy h:mm:ss a';
//        $scope.blood_1 = 100;
//        $scope.blood_2 = 120;
//
//        var stop;
//        $scope.play = function () {
//            // Don't start a new fight if we are already fighting
//            if (angular.isDefined(stop)) return;
//
//            stop = $interval(function () {
//                if ($scope.blood_1 > 0 && $scope.blood_2 > 0) {
//                    $scope.blood_1 = $scope.blood_1 - 3;
//                    $scope.blood_2 = $scope.blood_2 - 4;
//                } else {
//                    $scope.pause();
//                }
//            }, 100);
//        };
//
//
//        $scope.pause = function () {
//            if (angular.isDefined(stop)) {
//                $interval.cancel(stop);
//                stop = undefined;
//            }
//        };
//
//        $scope.resetFight = function () {
//            $scope.blood_1 = 100;
//            $scope.blood_2 = 120;
//        };
//
//        $scope.$on('$destroy', function () {
//            // Make sure that the interval is destroyed too
//            $scope.pause();
//        });

        var index = 0;
        setInterval(function () {
            if(index>=$scope.slides.length){
                index = 0;
            }
            for (var i = 0; i < $scope.slides.length; i++) {
                $scope.slides[i].active = false;
                $scope.slides[i].leaving = false;
            }
            var slide = $scope.slides[index];
            slide.active = true;
            slide.leaving = true;
//            console.info(slide);
            index++;
        }, 5000);
        $scope.prev = function () {
        };
        $scope.next = function () {
        };
    }]);
