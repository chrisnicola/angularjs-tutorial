# Data Binding


## Principals

For when things get confusing


## Controller -> Scope -> View
- Controllers expose code and data
- Scopes contain/namespace it
- Views render data and bind code


## Scopes: Symbol Tables
- Angular is a framework to write your application DSL
- You want control over scoping semantics
- This puts you in charge of the symbol table


## Angular uses dirty checking not observers/events
- Instead of firing events we apply sets of changes
- The naive implementation of dirty checking is O(n)


## Review:
- Controller -> Scope -> View
- Scopes: Symbol Tables
- Dirty Checking


## Controllers
- A constructor function
  - mutates scope
  - collaborates with services

```javascript
myApp.controller('MainController', function($scope) {
  // Controller manages the scope here
  $scope.count = 0;
  $scope.increment = function() { $scope.count++; };
  $scope.decrement = function() { $scope.count--; };
});
```


## Binding To The View

```
<div class="input-prepend input-append">
  <button class="btn" ng-click="decrement()">-</button>
  <input class="span2" ng-model="count">
  <button class="btn" ng-click="increment()">+</button>
</div>
```


## Repeaters and Filters

AngularJS does not support any complex logic in the HTML. This is done with
repeaters and filters.

```html
<div ng-repeat="tweet in tweets">
  <h1>{{tweet.username}}</h>
  <p>{{tweet.text}}</p>
</div>
```
```html
<input type="text" ng-model="query">
<div ng-repeat="tweet in tweets | filter:query">
```

Yes that is a filter filter.


## Included Filters

- `currency[:symbol]`
- `date[:format]`
- `filter:query`
- `json`
- `limitTo:limit`
- `lowercase/uppercase`
- `number[:fractionSize]`
- `orderBy:expression[:reverse]`


# Custom Filters

- reverse[:uppercase]

```javascript
angular.module('myModule', []).
filter('reverse', function() {
  return function(input, uppercase) {
    var out = "";
    for (var i = 0; i < input.length; i++) {
      out = input.charAt(i) + out;
    }
    // conditional based on optional argument
    if (uppercase) {
      out = out.toUpperCase();
    }
    return out;
  }
});
```

Great for interview questions.


## Exercise 2 : Data Binding

```
# Get the code
git co -f ex-2-start

# Run the tests
./scripts/test.sh
./scripts/e2e-test.sh
```


## Exercise 2 : Data Binding

```markdown
> status
Your tweets are still trapped in the `tweet` model.
You *must set them **free***.

You must build a controller to empower your tweet button.
Then we can liberate your very important thoughts and add them
to a list to stand for all the ages.

A _filter filter_ would be nice while you're at it.

>
```


## Exercise 2 : Hints

- Use ng-repeat to show lists of things
- Add an input with ng-model to use with the filter filter.
- Javascript arrays have a `push(object)` method
- Bonus: make a custom filter (e.g. highlight hashtags)


## Excercise 2 : Lessons Learned

`git co -f ex-2-solution`

- Controllers manage state through `$scope`
- Controllers can be defined for views using `ng-controller`
- Views bind to the controller


## Excercise 2 : Questions

- What were we binding to before the controller?
    - `$rootScope`
- Can controllers be nested?
    - Yes, which results in nested scopes
- Anything else?
