'use strict';

/* Services */

var jerseycatServices = angular.module('jerseycatServices', ['ngResource']);

jerseycatServices.factory('jersey', ['$resource',
  function($resource){
    return $resource('jerseys/:jerseyId.json', {}, {
      query: {method:'GET', params:{jerseyId:'jerseys'}, isArray:true}
    });
  }]);
