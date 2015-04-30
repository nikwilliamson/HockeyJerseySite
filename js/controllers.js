'use strict';

/* Controllers */

var jerseycatControllers = angular.module('jerseycatControllers', []);

jerseycatControllers.controller('jerseyListCtrl', ['$scope', 'jersey',
    function($scope, jersey) {
        $scope.jerseys = jersey.query();
        $scope.sortOrder = 'id';
        // $scope.leagueNHL = 'lightning';

    }
]);

jerseycatControllers.controller('jerseyDetailCtrl', ['$scope', '$routeParams', 'jersey',
    function($scope, $routeParams, jersey) {
        $scope.jersey = jersey.get({
            jerseyId: $routeParams.jerseyId
        }, function(jersey) {
            $scope.mainImageUrl = jersey.images[0];
        });

        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        }
    }
]);
