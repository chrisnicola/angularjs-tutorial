'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
.controller('MainController', function($scope, $timeout, $location, twitter) {
  $scope.tweets = []

  $scope.postTweet = function() {
    $scope.tweets.push($scope.tweet);
    $scope.tweet = ''
  }

  $scope.search = function() {
    $scope.tweets = twitter.search($scope.query);
  }

  $scope.goTo = function(tweetId) {
    $location.url('/tweet/' + tweetId)
  }
}).controller('TweetController', function($scope, $routeParams, twitter) {
  $scope.tweet = twitter.get($routeParams.tweetId)
});
