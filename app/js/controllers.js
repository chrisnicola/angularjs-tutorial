'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
.controller('MainController', function($scope, $timeout, twitter) {
  $scope.tweets = []

  $scope.postTweet = function() {
    $scope.tweets.push($scope.tweet);
    $scope.tweet = ''
  }

  $scope.search = function() {
    $scope.tweets = twitter.search($scope.query);
  }
});
