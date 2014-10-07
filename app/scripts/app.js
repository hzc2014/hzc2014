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
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/binding', {
                templateUrl: 'views/binding.html',
                controller: 'BindingCtrl'
            })
            .when('/filter', {
                templateUrl: 'views/filter.html',
                controller: 'FilterCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
