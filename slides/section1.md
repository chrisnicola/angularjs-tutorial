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

Lets get started!
