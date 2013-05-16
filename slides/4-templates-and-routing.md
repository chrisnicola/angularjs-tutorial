# Templates and Routes

It's pronounced "ra-oots" of course.


## Templates

AngularJS supports template/partial files that can reused and pulled into views.

_imagine if everything had to go in index.html?_


## Templates

Templates support everything we did before with views but we can reference them
with the `ng-view` directive and AngularJS will go off and fetch the HTML,
compile it and then insert it into the DOM.


## The ng-include directive

```html
<!-- template.html -->
<h1>I am a template</h1>
<p>{{data.binding}}</p>
```

```html
<!--index.html-->
<html ng-app>
  <body ng-controller="MyCtrlr">
    <h1>My App</h>
    <ng-include src="template.html"></ng-include>
  </body>
</html>
```


## The ng-view directive

```html
<!-- template.html -->
<h1>I am a template</h1>
<p>{{data.binding}}</p>
```

```html
<!--index.html-->
<html ng-app>
  <body>
    <ng-view></ng-view>
  </body>
</html>
```

_how do we know which template to use for the view?_



## Routing

```javascript
myApp = angular.module('myApp', [])
.config(['$routeProvider'], function($routes) {
  $routeProvider.when('/home', {
      controller: 'HomeController',
      templateUrl: 'template.html'
    }).when('/hello', {
      template: '<div>Hello {{ user.name }}!</div>',
      controller: 'HomeController'
    }).otherwise({ redirectTo: '/home' });

  // Optionally use HTML5 push-state instead of hashes
  $locationProvider.html5Mode(true);
});
```

The template and controller will be assigned to `ng-view` based on
the route rules.


## Routing Events

- `$routeChangeStart` - next, last
- `$routeChageSuccess` - next, last
- `$routeChageError` - next, last, error
- `$routeUpdate` - last

```javascript
$rootScope.$on('$routeChangeStart', function(e, next, last) { ... })
```


## Resolving

Sometimes we want something to happen before we resolve a route.

AngularJS uses __promises__ to provide this ability.


## Resolving

```javascript
$routeProvider.when('/home', {
  controller: 'HomeController',
  templateUrl: 'template.html'
  resolve: {
    wait: ['$timeout', function($timeout) {
      $timeout(null, 1000);
    }]
  }
})
```

AngularJS `$timeout` returns a promise, the route will now wait for it to
"resolve". We can do similar things with `$http` or `$resource` which also return
promises or use `$q` in our own services.



## Build: Using templates in a list

- git checkout section-4
- Use a template for the tweets in your search list.


## Build: Using templates for master-details

- Create a details page for displaying a single tweet
- Link to the detail page using a route
- The tweet should use it's own controller and template
