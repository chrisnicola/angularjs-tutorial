'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
.controller('MainController', function($scope) {
	$scope.tweets = []

	$scope.postTweet = function() {
		$scope.tweets.push($scope.tweet)
		$scope.tweet = ''
	}
});
