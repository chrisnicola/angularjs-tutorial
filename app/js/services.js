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
  var globalEndpoint = "https://alpha-api.app.net/stream/0/posts/stream/global?callback=JSON_CALLBACK";
  var streamTimeout = null;
  var _this = this;

  this.stream = function(timeout) {
    timeout = timeout || 5000;
    var stream = [];
    var lastId = '0';
    var update = function() {
      _this.global(function(results) {
        for (var i in results) {
          if (results[i].id > lastId) {
            stream.push(results[i])
            lastId = results[i].id
          }
        }
      });
      setTimeout(update, timeout);
    }
    update()
    return stream;
  };

  this.stopStream = function() { cancelTimeout(streamTimeout); }

  this.global = function(callback) {
    var results = [];
    $http({method: 'JSONP', url: globalEndpoint})
    .success(function(data, status, headers, config) {
      for (var i in data['data']) {
        status = data['data'][i];
        var result = {};
        result.id = status['id'];
        result.username = status['user']['username'];
        result.text = status['text'];
        result.timestamp = status['created_at'];
        result.userAvatarUrl = status['user']['avatar_image']['url'];
        results.push(result);
      }
      if(callback) callback(results)
    });
    return results;
  };
});
