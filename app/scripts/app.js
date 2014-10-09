'use strict';

/**
 * @ngdoc overview
 * @name HzcWebSite
 * @description
 * # HzcWebSite
 *
 * Main module of the application.
 */
angular
    .module('HzcWebSite', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/website', {
                templateUrl: 'views/website.html',
                controller: 'WebsiteCtrl'
            })
            .when('/outsourcing', {
                templateUrl: 'views/outsourcing.html',
                controller: 'OutsourcingCtrl'
            })
            .when('/filter', {
                templateUrl: 'views/filter.html',
                controller: 'FilterCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
