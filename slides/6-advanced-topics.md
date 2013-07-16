# Advanced Topics
The Other Guys


## Application Structure

Like with like

Domain Driven Design/SOLID


## Like with Like

- As per angular-seed or yeoman
- This works great until:
  - controller.js, directive.js, etc.js ... become enormous
  - layout doesn't descibe app
  - merge conflicts
  - scrolling


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


## Adapting Libraries
D3
[Force Directed Graph](http://bl.ocks.org/mbostock/4062045)
[Bubble Chart](http://bl.ocks.org/mbostock/4063269)

git co -f eg-6-2

## DDD/SOLID

- Things that change together, stay together
- The enumerable benefits as desribed by DDD/SOLID
- You will not have to suffer Uncle Bob's wrath
- The standard tooling/config will fight you


## Questions?
- What advanced topics would you like covered/revisited?


## Follow-up Resources

- [Angular at Google i/o](http://www.youtube.com/watch?v=HCR7i5F5L8c)
- [Year Of Moo](http://www.yearofmoo.com/)
- [Egghead.io](http://www.egghead.io/)
- [Angular UI](http://angular-ui.github.io/)
- [Google Group](https://groups.google.com/forum/?fromgroups#!forum/angular)


## NgModelController
_(optional)_

git co -f eg-6-1