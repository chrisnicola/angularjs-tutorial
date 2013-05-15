# Data Binding
## Section 2



# Principals
## For when things get confusing


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



## Exercise: Wiring Up a Controller
- Git Tag: wiring-controller
- Run the Tests:
  - ./scripts/test.sh
  - ./scripts/e2e-test.sh


## Controllers
- A constructor function
  - mutates scope
  - collaborates with services
```javascript
myApp.controller('myController', ['$scope', function($scope) {
  // ...
}]);
```


## Binding Data
```javascript
myApp.controller('myController', ['$scope', function($scope) {
  $scope.count = 0;
}]);
```


## Binding Functions
```javascript
myApp.controller('myController', ['$scope', function($scope) {
  $scope.count = 0;
  $scope.increment = function() { $scope.count++; };
  $scope.decrement = function() { $scope.count--; };
}]);
```

## Putting it Together
```
<div class="input-prepend input-append">
  <button class="btn" ng-click="decrement">-</button>
  <input class="span2" ng-model="count">
  <button class="btn" ng-click="increment">+</button>
</div>
```


## Scope, Watches, Digest, and Events
- 
