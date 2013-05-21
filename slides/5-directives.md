# Directives
This is why we are here


## Why Directives?

Templates are not the only way to create reusable components in our page.

In fact directives will be far more common for this.


## Simple Directives

```
myModule.directive('directiveName', function factory(injectables) {
  var directiveDefinitionObject = {
    priority: 0,
    controller: function controller($scope) { ... },
    template: '<div></div>',
    templateUrl: 'directive.html',
    replace: false,
    transclude: false,
    restrict: 'A',
    scope: { binding: '=', functions: '&', attribute: '@' },
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

errrmmm....


## Simple Directives

_Ok, for real this time_

```javascript
myModule.directive('colour', function() {
  return function(scope, element, attrs) {
    element.css('color', attrs.color);
  }
})
```
```
<div color='red'>Hi, this will be red</div>

<div color='{{color}}'>Hi, this will be red</div>
```

`element` uses jqLite support by default but will use jQuery if it is available


## Directive Templates

```javascript
myModule.directive('facepalm', function() {
  return {
    restrict: 'E'
    replace: true,
    template: "<pre>"
      + "  .-'---`-.\n"
      + ",'          `.\n"
      + "|             \\\n"
      + "|              \\\n"
      + "\\           _  \\\n"
      + ",\\  _    ,'-,/-)\\\n"
      + "( * \\ \\,' ,' ,'-)\n"
      + " `._,)     -',-')\n"
      + "   \\/         ''/\n"
      + "    )        / /\n"
      + "   /       ,'-'\n"
      + "</pre>",
  }
});
```
```html
<facepalm>
```

By default, directives work as attributes, `restrict` lets us specify:
E-element, C-class, A-attribute, M-comment


## Directive Templates

```javascript
myModule.directive('', function() {
  return {
    scope: true,
    template: "<div>{{data.value}}</div>,
    link: function (scope, element, attr) {
      scope.data = { value = "My Value" }
    }
  }
});
```

Directives can have their own child scope.


## Directive Controllers

Directives can also have their own controllers (yay!). This can be useful if a
directive must manage some internal state and behaviours.


## Directive Controller

```javascript
myModule.directive('clock', function() {
  return {
    restrict: 'E',
    scope: true,
    replace: true,
    template: '<span>{{ currentTime | date:"mediumTime" }}</span>',
    controller: ['$scope', function($scope) {
      setInterval(function() {
        $scope.currentTime = new Date()
        $scope.$digest()
      }, 1000)
    }]
  }
})
```

```html
  <clock>
```


## Transclusion

Ok lets, explain how `transclude` works.

![WTF is Transclusion](assets/wtftransclude.jpg)


## Transclusion

_Not even remotely a real word_

```javascript
.directive('blink', function() {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    template: "<div ng-transclude></div>",
    link: function(scope, element, attrs) {
      var interval = attrs.interval || 1000
      setInterval(function() {
        if (element.css("opacity") === "1")
          element.css("opacity", "0")
        else
          element.css("opacity", "1")
      }, interval);
    }
  }
});
```
```html
<blink><facepalm></blink>
```


## Directive Scope: '@'

```javascript
myModule.directive('colour', function() {
  return {
    scope: { color: '@' }
    link: function(scope, element, attrs) {
      scope.$watch('color', function(value) {
        element.css('color', scope.value)
      })
    }
  }
})
```
```
<input ng-model="color">
<div color="{color}">Hi, this will be red</div>
```


## Directive Scope: '='

```javascript
myModule.directive('colour', function() {
  return {
    scope: { color: '=' }
    link: function(scope, element, attrs) {
      scope.$watch('color', function(value) {
        element.css('color', scope.value)
      })
    }
  }
})
```
```
<input ng-model="color">
<div color="color">Hi, this will be red</div>
```

'=' supports two-way binding, in case you're directive can change data.


## Directive Scope: '&'

```javascript
myModule.directive('colour', function() {
  return {
    scope: { color: '&' }
    link: function(scope, element, attrs) {
      scope.$watch('color()', function(value) {
        element.css('color', value)
      })
    }
  }
})
```
```
<input ng-model="color">
<div color="color">Hi, this will be red</div>
```

Typically used where you want a directive to
execute a function passed to it from a controller scope.


## Excercise 5 : Lets make directives

```markdown
> status
Carefully studying the worlds status updates has exposed them for what they
truely are. Not the beutiful haiku of millions of voices but complete and utter
drivel. You're psycological break is complete.

You will turn your insanity against the world. Against the HTML it holds so
dear, you will change it, warp it, bend it to your twisted will.
__You will create directives__.

NO ONE CAN STOP YOU!

>
```


## Excercise 5 : Free Thinking with HTML

Some ideas:
- A timestamp that counts up in seconds since the tweet was posted.
- A tweet oembed directive (could be used in your details view)
- Replace hash tags in the text with links (or make them blink or something).
- Rotating avatars

