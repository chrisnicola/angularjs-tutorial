'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
.controller('MainController', function($scope, $timeout, appnet) {
  $scope.tweets = [];

  $scope.postTweet = function() {
    $scope.tweets.push($scope.tweet);
    $scope.tweet = '';
  };

  $scope.stream = function() {
    $scope.tweets = appnet.stream(2000);
  };

  $scope.search = function() {
    $scope.tweets = appnet.global();
  };

  $scope.stream();
});
