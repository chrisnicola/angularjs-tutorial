# AngularJS

## The HTML6 Shim

```javascript
  MyApp = angular.module('Awesome', ['TheSauce'])
  .config(['$routeProvider'], function($routes) {
    $routes
      .when('/hello-world', { templateUrl: '/views/hello.html' })
      .when('/goodbye', { templateUrl: '/views/goodbye.html' });
  });
```



## Who are we?

### Chris Nicola

[@lucisferre](http://twitter.com/lucisferre)

CTO and co-founder of [WealthBar](http://wealthbar.com)

### Saem Ghani

[@saemg](http://twitter.com/saemg)

Lasso Data Systems



## Why?

HTML has limitations when building dynamic applications

Provide reusable dynamic components that can be invoked declaratively

```html
  <pie-chart pie-data='model.pieData' show-legend='true'>
```



## What?

A way of extending HTML vocabulary with dynamic functionality **declaratively**

An **architectural framework** (MVC) that drives a dynamic web application.



## Ok. It's time to _throw down_.

![Backbone vs AngularJS](/assets/backbone-vs-angular.png)

(your MVC is so fat)

[Source](http://www.localytics.com/blog/2013/angularjs-at-localytics/)



## Key Concepts

### MVC Pattern
### Modularity
### Extensability
### Testability



## Key Concepts: MVC

* Controller
* View
* Model
* Routing


## Controller

```javascript
LoginController = function ($scope, $location, $resource) {
  sessions = $resource('/sessions')
  $scope.loginForm = { email: '', password: '' }

  var afterLogin = function(session) {
    $location.url(session.afterLoginPath);
  }

  $scope.login() = function() {
    sessions.create($scope.loginForm, afterLogin)
  }
}
```


## View

<div ng-controller='LoginController'>
  <form ng-submit="login()">
    <input type="email" name="email" id="email" ng-model="user.email" required>
    <input type="password" name="password" id="password" ng-model="user.password" required>
    <button>Login</button>
  </form>
</div>

```html
  <div ng-controller='LoginController'>
    <form ng-submit="login()">
      <input type="email" name="email" id="email"
             ng-model="loginForm.email" required>
      <input type="password" name="password" id="password"
             ng-model="loginForm.password" required>
      <button>Login</button>

      <!-- alternatively -->

      <button ng-click="login()">Login</button>
    </form>
  </div>
```


## Model

The `$scope` object provided by AngularJS to each Controller (and directive)
provides a _context specific_ model.

$scope bindings can be either properties or methods.


## Model

Controller's (and directives) can be nested and their `$scope`'s will form a tree.

A View can bind to properties and functions on their Controller's `$scope` and any parent scopes up to and including the $rootScope.


## Routing

```javascript
  $routeProvider
    .when('/login', { templateUrl: 'login.html' })
    .when('/home', { template: '<div>Hello {{ user.name }}!</div>',
                     controller: 'HomeController'})
    .when('/users/:id', { templateUrl: 'user.html' })

  $locationProvider.html5Mode(true)
```
and you can do much more with the routing API



## Key Concepts: Modularity

* Modules
* Services
* Dependency Injection


It's like __Spring__ for javascript!


## Modules

Portable top level collection of services, controllers, directives, filters,
etc.

```javascript
angular.module('Rails', ['ngResource'])
angular.module('SocketIO')
angular.module('Shared')

angular.module('MyApplication', ['Shared', 'Rails', 'SocketIO'])
```

Can be though of as namespaces


## Services: Built-in

* $http - basic HTTP API using  XMLHttpRequest
* $resource - less basic RESTful API
* $location - history API support
* $locale - localization
* $q - promise/deferred implemenation
* and so... much... more.


## Services: Custom

Use services to build more services

```javascript
angular.module('Services',['ngResource'])
.factory('Authentication', ['$resource', '$rootScope',
function($resource, $rootScope) {
  sessions = $resource('/session')
  return {
    login: function(params, callback) {
      sessions.create params, function(session) {
        $rootScope.currentSession = session
        callback(session)
      }
    },
    logout: // logout logic goes here
  }
}])
```


## Dependency Injection

```
angular.module('MyApplication', ['Shared', 'Rails', 'SocketIO'])

.factory('Authentication', ['$resource', function($resource) { }])

.controller('LoginController', ['Authentication', function(auth) { }])

.directive('PieChart', ['DataProcessing', function(processing) { }] )

.filters('Prime', ['PrimeNumbers', function(primes) { }] )
```


## Alternative Approach

```
window.MyApp = angular.module('MyApplication', ['Shared', 'Rails', 'SocketIO'])

MyApp.factory('Authentication', ['$resource', function($resource) { }])

MyApp.controller('LoginController', ['Authentication', function(auth) { }])

MyApp.directive('PieChart', ['DataProcessing', function(processing) { }] )

MyApp.filters('Prime', ['PrimeNumbers', function(primes) { }] )
```



## Key Concepts: Extension

Directives: Allow us to extend the DOM declaratively

```
  <pie-chart pie-data='model.pieData' show-legend='true'>
  <div pie-chart pie-data='model.pieData' show-legend='true'>

  <input type="number" up-down-buttons ng-model='favoriteNumber'>
```

Filters: Allow us to extend our data-bindings

```
  <div>{{ account.balance | currency }}</div>
```
```javascript
  account.balance = 123456.78 => "$123,456.78"
```


## Directives

```
myModule.directive('directiveName', function factory(injectables) {
  var directiveDefinitionObject = {
    priority: 0,
    template: '<div></div>',
    templateUrl: 'directive.html',
    replace: false,
    transclude: false,
    restrict: 'A',
    scope: false,
    compile: function compile(tElement, tAttrs, transclude) {
      return {
        pre: function preLink(scope, iElement, iAttrs, controller) { ... },
        post: function postLink(scope, iElement, iAttrs, controller) { ... }
      }
    },
    link: function postLink(scope, iElement, iAttrs) { ... }
  };
  return directiveDefinitionObject;
});
```


I mean... it's just sooooo simple.


## Directives

```
myModule.directive('clock', function factory($timeout) {
  return {
    template: '<span>{{currentTime | date}}</span>',
    link: function (scope, iElement, iAttrs) {
      $timeout(function() {
        scope.currentTime = new Date()
      }, 1000)
    }
  }
})
```



# Key Concepts: Testability

* Karma (_better than testacular_)
* Unit Testing
* E2E Testing
* Multi-browser testing



## But wait! There's more!


![iceberg](/assets/tip-of-the-iceberg.jpg)


## Resources and Stuff

* [Egghead.io](https://egghead.io)
* [Year of Moo](https://yearofmoo.com)
* [Angular Batarang](https://github.com/angular/angularjs-batarang) - Profiling Tool
* [Angular Animations](http://www.yearofmoo.com/2013/04/animation-in-angularjs.html) ([demo](http://yearofmoo-articles.github.io/angularjs-animation-article/app/))
* [Angular Strap](http://mgcrea.github.io/angular-strap/)
* [SEO support via hashbangs](http://www.yearofmoo.com/2012/11/angularjs-and-seo.html)



## Coffeescript Plug

```javascript
angular.module('Services',['ngResource'])
.factory('Authentication', ['$resource', '$rootScope',
function($resource, $rootScope) {
  sessions = $resource('/session')
  return {
    login: function(params, callback) {
      sessions.create params, function(session) {
        $rootScope.currentSession = session
        callback(session)
      }
    },
    logout: // logout logic goes here
  }
}])
```


## Coffeescript Plug

```
angular.module 'Services', ['ngResources']
.factory 'Authentication', ['$resource', '$rootScope',
($resource, $rootScope) ->
  session = $resource '/session'

  login: (params, callback) ->
    sessions.create params, (session) ->
      $rootScope.currentSession = session
      callback(session)
  logout: # logout logic goes here
]
```

(but it's a hipster language so don't use it)



## Official Talk Disclaimer

# YMMV



## Discussion, Questions?

