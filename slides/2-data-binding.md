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
  <button class="btn" ng-click="decrement">-</button>
  <input class="span2" ng-model="count">
  <button class="btn" ng-click="increment">+</button>
</div>
```


## Exercise 2 : Controllers

```
# Get the code
git co -f ex-2-start

# Run the tests
./scripts/test.sh
./scripts/e2e-test.sh
```


## Exercise 2 : Controllers

```markdown
> status
Your tweets are still trapped in the `tweet` model.
You *must set them **free***.

You must build a controller to empower your tweet button.
Then we can liberate your very important thoughts and add them
to a list to stand for all the ages.

>
```


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
