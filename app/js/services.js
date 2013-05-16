'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
/*
   Twitter API for Searching:
   https://dev.twitter.com/docs/api/1/get/search
   hint: you need to use JSONP


   AnguarJS $http API:
   http://docs.angularjs.org/api/ng.$http
   hint: add callback=JSONP_CALLBACK for AngularJS jsonp support
   */
.service('twitter', function TwitterService($http) {
  var searchEndpoint = "http://search.twitter.com/search.json?callback=JSON_CALLBACK";
  this.search = function(query) {
    // search twitter here
  };
});
