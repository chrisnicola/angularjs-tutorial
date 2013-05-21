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


## Exercise 4 : Master's and Details

```
# Get the code
git co -f ex-4-start

# Run the tests
./scripts/test.sh
./scripts/e2e-test.sh
```


## Exercise 4 : Master's and Details

```markdown
> status
Your twitter search has ended your painful isolation, but you want
more. If only there was a way to view an individual tweet, to examine it
further, give it the careful attention these 140 characters of pure wisdom
deserve...

You will need to use all your newly acquired skills.

YOU __MUST__ DO THIS.

>
```


## Exercise 4 : Hints

- Use `ng-include` to display a tweet template in your repeater
- Use `ng-view` and routing to display a master page for individual tweets
- Consider where you want to show the details, you don't have to replace the
  whole page.
- You could use the same template in the repeater and details if you want.


## Exercise 4 : Lessons Learned

`git co -f ex-4-solution`

- Templates allow for reusable HTML snippets.
- The are great for pages, navigation, repeating elements, mater-detail, etc.
- Can be used declaratively with `ng-include` or with routing and `ng-view`.


## Exercise 4 : Questions
