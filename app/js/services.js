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
    var results = [];
    $http({method: 'GET', url: globalEndpoint})
    .success(function(data, status, headers, config) {
      for (var i in data['data']) {
        status = data['data'][i];
        var result = {};
        result.id = status['id'];
        result.userName = status['user']['username'];
        result.text = status['text'];
        result.text = status['html'];
        result.timestamp = status['created_at'];
        result.userAvatarUrl = status['user']['avatar_image']['url'];
        results.push(result);
        console.log(status)
      }
    });
    return tweets;
  };
});
