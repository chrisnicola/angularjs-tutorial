# AngularJS


## Intros

### Chris Nicola

[@lucisferre](http://twitter.com/lucisferre)

CTO and co-founder of [WealthBar](http://wealthbar.com)

### Saem Ghani

[@saemg](http://twitter.com/saemg)

Senior software developer at [Lasso Data Systems](http://lassocrm.com)

Organizer of Polyglot Vancouver


## Syllabus

- 1 This (1hr)
- 2 Data Binding (1hr 30mins)
- 3 Services and DI (1hr 30mins)
{{ Lunch Break }}
- 4 Templates and Routing (1hr)
- 5 Directives (2hr)
- 7 Structuring Applications (30 mins)
- 8 Code Dojo: Hacking (30 hr)


## More Play, Less Slides

- We prefer supervised and goal oriented learning
- Expect lots of examples and writing code yourself



## The Angular Philosophy

A way of extending HTML vocabulary with dynamic functionality **declaratively**

An **architectural framework** (MVC) that drives a dynamic web application.

```html
  <pie-chart pie-data='model.pieData' show-legend='true'>
```


## Key Concepts

### MVC Pattern
### Modularity
### Extensability
### Testability



## Getting Setup

- Requirements:
  - Chrome
  - Node
    - karma (sudo npm install -g karma)
  - Git


## Getting The Code
- git clone [git@github.com:lucisferre/angularjs-tutorial.git]
  - cd angularjs-tutorial && node ./scripts/web-server.js
  - browse to [http://localhost:8000]


## AngularJS Batarang
- There is a convenient link in the 'Getting Batarang' section of the README.md
- Alternatively search for 'AngularJS batarang'


## Reference
- Keep the following open in your browser at all times (see the README)
  - [http://docs.angularjs.org/api/]
  - [http://docs.angularjs.org/guide/]


## The Tour
- Git Tag: angular-seed-tour


## Hello World
- Git Tag: hello-world
- Complete the objectives as per the README.md


## Bind to a Scope Variable
- ng-model
  - allows for two way data binding
  - applied elements such as input, select and textareas
  - expressed as an attribute or class
- hint: check the API docs


## Disable Elements
- ng-disable
  - disables elements based on truthiness of an expression
  - employs the disabled attribute
  - expressed as an attribute or class
- hint: check the API docs


## Expressions
- Angular has a parser for expressions
- These expressions are very limited
- They are very forgiving, so undefined, null etc... are not exceptions
- Think data access
  - There is some fudging with filters and negation of truthiness
- This will come up often enough that you'll learn it over time


## Hello World Review

- Practical
  - ng-model: bind UI elements to items on the scope
  - ng-disable: disable element based on the truthiness of an item on the scope
  - expressions: a DSL for safe evaluation
- Big Picture:
  - Angular provides a limited application mark-up language


## Key Concepts: MVC Pattern

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


## Modules

Portable top level collection of services, controllers, directives, filters,
etc.

```javascript
angular.module('Rails', ['ngResource'])
angular.module('SocketIO')
angular.module('Shared')

angular.module('MyApplication', ['Shared', 'Rails', 'SocketIO'])
```

Can be thought of as namespaces


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

```javascript
myModule.directive('clock', function factory($timeout) {
  return {
    scope: { color: '@' }
    template: '<span>{{currentTime | date}}</span>',
    controller: function($scope, $element, $attrs) {
      $timeout(function() {
        $scope.currentTime = new Date()
      }, 1000)
    },
    link: function($scope, $element, $attrs) {
      $element.css('color', $scope.color)
    }
  }
})
```

```html
  <clock color="red" />
```



# Key Concepts: Testability

* Karma (_better than testacular_)
* Unit Testing
* E2E Testing
* Multi-browser testing


## Karma

* Test Runner
* Enslaves browsers, just like buster (Multi-browser)
* Testing framework agnostic
* Integrates with IDEs and CI
* Sadly no longer called Testacular


## Unit Testing

* We can even test our DOM manipulation

```
myModule.directive('tag', function factory() {
  return {
    restrict: 'A',
    link: function (scope, iElement, iAttrs) {
      iElement.text = 'i wuz here ' + iElement.text;
    }
  }
});
```

```
describe('Testing the tag directive', function() {
  var $scope, ctrl, compile;

  beforeEach(module('myApp'));
  beforeEach(inject(function($rootScope, $compile) {
    $scope = $rootScope.$new();
    compile = $compile;
  }));

  it('should tag the text of an element', function() {
    var elm = compile('<div tag>Some pristine text.</div>')($scope);
    expect(elm.text()).toBe('i wuz here Some pristine text.');
  });
});
```


## E2E Testing

```
describe('Login', function() {
 
  describe('Login view', function() {
 
    beforeEach(function() {
      browser().navigateTo('app/login.html');
    });
 
 
    it('should let you submit your credentials', function() {
      input('username').enter('bob');
      input('password').enter('super secret');
      element('.loginBtn').click();
      
      // make sure appropriate side-effect took place
    });
  });
});
```



## But wait! There's more!


![iceberg](assets/tip-of-the-iceberg.jpg)


## Resources and Stuff

* [Egghead.io](http://egghead.io)
* [Year of Moo](http://yearofmoo.com)
* [Yeoman](http://yeoman.io)
* [Angular Batarang](http://github.com/angular/angularjs-batarang) - Profiling Tool
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


