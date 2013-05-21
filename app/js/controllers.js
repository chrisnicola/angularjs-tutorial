'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
.controller('MainController', function($scope, $timeout, $location, appnet) {
  $scope.tweets = [];
  $scope.postTweet = function() {
    $scope.tweets.push($scope.tweet);
    $scope.tweet = '';
  };

  $scope.stream = function() {
    $scope.tweets = appnet.stream(1000);
  };

  $scope.search = function() {
    $scope.tweets = appnet.global();
  };

  $scope.stream();

  $scope.goTo = function(tweetId) {
    $location.url('/tweet/' + tweetId)
  }
}).controller('TweetController', function($scope, $routeParams, appnet) {
  $scope.tweet = appnet.get($routeParams.tweetId)
});
