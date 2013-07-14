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
   hint: add callback=JSON_CALLBACK for AngularJS jsonp support
   */
.service('appnet', function AppNetService($http) {
  var globalEndpoint = "https://alpha-api.app.net/stream/0/posts/stream/global";
  this.global = function() {
    // retrieve the global stream here.
  };
});
