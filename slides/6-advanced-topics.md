# Advanced Topics
The Other Guys


## Application Structure

Like with like

Domain Driven Design/SOLID


## Like with Like

- As per angular-seed or yeoman
- This works great until:
  - controller.js, directive.js, etc.js ... become enormous
  - merge conflicts


## DDD/SOLID

<pre>
/app
    /tweet
        /css
            tweets.css
        /img
            cute-bird.jpg
        /js
            /src
                tweet.js
            /test
                tweetSpec.js
        /partials
            tweet.html
    /tweet-edit
    /stream
    /shared
    app.js
    index.html
/test
    /lib
    runner.html
    scenarios.js
</pre>


## DDD/SOLID: tweet.js

```javascript
angular.module('twitter.tweet', ['Shared'])
.controller('TweetController', function() {})
.directive('tweet', function())
.constant('max-characters', 140)
.service('UrlShortner', function($url) {})
;
```


## DDD/SOLID

- Things that change together, stay together
- The enumerable benefits as desribed by DDD/SOLID
- You will not have to suffer Uncle Bob's wrath
- The standard tooling/config will fight you


## NgModelController

git co -f eg-6-1-ng-model-controller

