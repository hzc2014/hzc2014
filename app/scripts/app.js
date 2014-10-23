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
            .when('/development', {
                templateUrl: 'views/development.html',
                controller: 'DevelopmentCtrl'
            })
            .when('/team',{
                templateUrl:'views/team.html',
                controller:'TeamCtrl'
            })
            .when('/joinus',{
                templateUrl:'views/joinus.html',
                controller:'JoinusCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
