# AngularJS


## Intros

### Chris Nicola
- 

### Saem Ghani
- I came to Angular as a refuge from ExtJS, Ember, jQuery
- I'm a backend programmer that happens to need UIs
- JavaScript, relatively speaking, is weird


## Syllabus
- This is a rough schedule
- If we motor through it, then onto hard questions that will undoubtedly be hard to answer


## More Play, Less Slides
- Ideally you learn angular on your own
- we'll try and make that happen but nudge you along
- hopefully through a path of least resistance



## The Angular Philosophy
- Misko Hevery, a Google Test Engineer, created this to allow for rapid development of intranet applications
- What came about was a language for declaratively creating apps
- Defined around a small library which defines the aforementioned language
- This language, 'Angular Core', can be employed to build our own Application UI DSL


## Key Concepts

### MVC Pattern
- Of course, this is Angular's own special take on it

### Modularity
- Please do not think AMD (Asynchronous Modules Definitions)
- This is all about dependency injection (DI/IoC)

### Extensability
- The framework is written in a modular fashion hence everything can be overriden

### Testability
- It's everywhere, and in earnest
- This tutorial will be no exception



## Getting Setup
- Chrome
  - Developer tools and the angular plugin, firefox in a pinch
- Node
  - Will run a local server, you could get by with disabling browser security
- karma (sudo npm install -g karma)
  - This will run all the tests and "mark" your work
- Git
  - If you don't know it/have it just pair with someone, we don't know?


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
- scripts
  - web-server.js
  - test.sh
  - e2e-test.sh
- index.html
  - ng-app to inform angular that this is an application
  - ng-view direct the application to render the view here
  - weird app-version attribute
- app.js
  - creates a module
  - depends upon other modules being defined
  - configures the '$routeProvider' service
    - given a particular URL render a template driven by a controller
    - fallback to a particular URL if unmatched
- controllers.js
  - basic empty controllers
  - Give them a name
  - Tell angular how to build them
  - the key to note is that they're simply functions
- directives.js
  - this is where angular is "different"
  - given the core of angular we can define language constructs to extend HTML
  - name the directive, which gets mangled when referred to in HTML
    - the mangling is all lower case with a hyphen separating words instead of upper cased characters
  - we specify it's dependencies (notice a pattern?)
    - wrap the whole thing in an array
    - specify as a string
    - those are passed in order to the last item in the array (your fn)
  - then we return a function (happens to be a link function)
    - which shall be passed a scope
      - the thing that holds code and data from the controller
      - more importantly we're building a declarative language, it's the scope!
    - the element it's declared upon (jquery in this case)
    - associated attributes of the element as a hash
    - the body instructs angular what to do when 'linking' this directive to data on the scope
- filters.js
  - filters are pipeline functions are that can be used to transform expression values
  - keep them light as they run all the time
  - they're defined like everything else in regards to dependency injection
  - ultimately they return, an ideally pure, function
- services.js
  - these are the catch all for when you have things that do *not* fit into controllers, directives, etc...
  - defined like the rest
  - you can define, values, constants, services, factories, providers and all sorts of things
  - all of which will be covered later, a value is anything, and can vary over time, unlike constants
- partials
  - these are fragments that can be used as views for screens/pages or for more complicated directives
- tests
  - unit
    - directivesSpec.js
      - uses jasmine
      - we load the module which has the SUT (first use of module)
      - we call module, requiring "$provide", the root of all dependency injection, and configure value to be 'TEST_VER'
      - via inject we ask for a $compile and $rootScope, note:
        - a) the angular compiler is available to us
        - b) the scope has a root, as in it's a tree, as scopes are in real languages
      - we compile some markup, bind our data to it, and set an expectation
  - e2e
    - runner.html
      - runs all the tests and nicely reports them
    - scenarios.js
      - jasmine again, except now we have an API to pretend to be the browser
      - without going into too much detail much of this involves a mock browser walking the app


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



