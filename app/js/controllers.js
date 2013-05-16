'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
.controller('MainController', function($scope, twitter) {
	$scope.tweets = []

	$scope.postTweet = function() {
		$scope.tweets.push($scope.tweet)
		$scope.tweet = ''
	}

	$scope.search = function() {
		// use twitter.search($scope.query)
		
		$scope.tweets = twitter.search($scope.query)
	}
});
