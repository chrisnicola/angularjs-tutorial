# Services and DI



## Services

Services generally contain the vast majority of the application's logic.

This is the "core" of your application. Things like domain logic, integrations,
computation, etc. should all be managed by services.

Shared logic belongs here too. Angular provides a few for you.


## Some built in AngularJS Services

- `$http` - Provides basic XHR with promises
- `$resource` - Provides RESTful API access on top of $http
- `$location` - Support for working with window.location and navigation
- `$timeout` - Angular-ifed window.setTimeout functionality
- `$rootScope` - Provides access to the "root scope"
- `$q` - Promises support

[Full list in the API guide](http://code.angularjs.org/1.1.4/docs/api)


## Digression: Promises

Javascript does a lot of things 'asynchronously' and AngularJS uses promises as
a way to handle this gracefully.

```javacript
$http.get('/some-awesome-url/')
  .success(function() { console.log('yay!'); })
  .error(function() { console.log('boo...'); })
  .complete(function() { console.log('So, that just happened...')})
```

Many services return promises for asynchronous work. Consider applying similar
patterns for your own services.

Angular provides `$q` to help with this.



## Dependency Injection

Angular supports DI everywhere. Controllers, Services, Directives even Filters
all can declare services as dependencies.


## Services often depend on other services

`$resource` relies on `$http`

`$route` depends on `$location`


## So can we

```javascript
angular.module('my-services',['ngResource'])
.factory('Authentication', ['$resource', '$rootScope',
function($resource, $rootScope) {
  sessions = $resource('/session');
  return {
    login: function(params, callback) {
      sessions.create(params, function(session) {
        $rootScope.currentSession = session;
        callback(session);
      });
    },
    logout: // logout logic goes here
  }
}]);
```


## DI Examples

```javascript
// Modules can require the services in other modules
var myapp = angular.module('MyApplication', ['Shared', 'Rails', 'SocketIO'])
```
```javascript
// Service which depends on the $resource service
myapp.factory('Authentication', ['$resource', function($resource) { }])
```
```javascript
// Controller which depends on the Authentication service
myapp.controller('LoginController', ['Authentication', function(auth) { }])
```
```javascript
// Directive which depends on a DataProcessing service
myapp.directive('PieChart', ['DataProcessing', function(processing) { }] )
```
```javascript
// Filter which depends on a PrimeNumbers service
myapp.filters('Prime', ['PrimeNumbers', function(primes) { }] )
```



## Testing A Service

<!--Todo: Example-->



## Build: Twitter Search

* Go to branch `section-3`
* Read the tests
* Build a service that uses `$http` to make them pass
* Inject this service into your controller to implement searching
