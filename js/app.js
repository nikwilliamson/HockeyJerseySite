'use strict';

/* App Module */

var jerseycatApp = angular.module('jerseycatApp', [
    'ngRoute',
    'jerseycatAnimations',

    'jerseycatControllers',
    'jerseycatFilters',
    'jerseycatServices'
]);

jerseycatApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/jerseys', {
            templateUrl: 'partials/jersey-list.html',
            controller: 'jerseyListCtrl'
        }).
        when('//:jerseyId', {
            templateUrl: 'partials/jersey-detail.html',
            controller: 'jerseyDetailCtrl'
        }).
        otherwise({
            redirectTo: '/jerseys'
        });
    }
]);
