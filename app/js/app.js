'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tweet/:tweetId', {
    templateUrl: 'partials/tweet.html',
    controller: 'TweetController'
  }).when('/', { templateUrl: 'partials/tweet-form.html' });
}]);
