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
    var tweets = [];
    $http({method: 'JSONP', url: searchEndpoint, params: {q:query}}).
      success(function(data, status, headers, config) {
      for (var i in data['results']) {
        status = data['results'][i];
        var tweet = {};
        tweet.id = status['id'];
        tweet.userName = status['from_user'];
        tweet.text = status['text'];
        tweet.timestamp = status['created_at'];
        tweet.userAvatarUrl = status['profile_image_url'];
        tweets.push(tweet);
        console.log(status)
      }
    });
    return tweets;
  };
});
