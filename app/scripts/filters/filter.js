'use strict';

/**
 * @ngdoc function
 * @name HzcWebSite.controller:BindingCtrl
 * @description
 * # BindingCtrl
 * Controller of the HzcWebSite
 */
var app = angular.module('HzcWebSite');

app.factory('Data', function () {
    return [
        {
            name: 'hello1',
            desc: 'desc1'
        },
        {
            name: 'abss',
            desc: 'desc2'
        },
        {
            name: '322431',
            desc: 'desc4'
        },
        {
            name: 'hello1',
            desc: 'x9548'
        },
        {
            name: 'hello1',
            desc: 'desc1'
        },
        {
            name: 'hello1',
            desc: 'desc1'
        },
        {
            name: 'hello1',
            desc: 'desc1'
        },
        {
            name: 'hello1',
            desc: 'desc1'
        }
    ];
});

app.controller('FilterCtrl', function ($scope, Data) {
    $scope.data = {
        list: Data
    };
});
