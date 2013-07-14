# AngularJS

"There's a directive for that"



# Introduction


## About Us

### Chris Nicola

[@chrismnicola](http://twitter.com/chrismnicola)

CTO and co-founder of [WealthBar](http://wealthbar.com)

### Saem Ghani

[@saemg](http://twitter.com/saemg)

Senior software developer at [Lasso Data Systems](http://lassocrm.com)

Organizer of Polyglot Vancouver


## Syllabus

- 1 This (1hr)
- 2 Data Binding (1hr 30mins)
- 3 Services and DI (1hr 30mins)
- {{ Lunch Break }}
- 4 Templates and Routing (1hr)
- 5 Directives (2hr)
- 7 Advanced Topics (30 mins)
- 8 Code Dojo: Hacking (30 hr)


## More Play, Less Slides

- We prefer supervised and goal oriented learning
- Expect lots of examples and writing code yourself


## The Angular Philosophy

A way of extending HTML vocabulary with dynamic functionality **declaratively**

An **architectural framework** (MVC) that drives a dynamic web application.

```html
  <pie-chart pie-data='model.pieData' show-legend='true'>
```


## Key Angular Concepts

### The MVC Pattern
_not Rails MVC though_
### Modularity
### Extensability
### Testability


## Getting Setup

- Requirements:
  - Chrome
  - Node
    - karma (sudo npm install -g karma)
  - Git


## Getting The Code

```bash
git clone git@github.com:lucisferre/angularjs-tutorial.git
cd angularjs-tutorial && ./scripts/web-server.js
open http://localhost:8000
```


## The AngularJS Batarang
- [Plugin for Chrome](https://chrome.google.com/webstore/detail/angularjs-batarang/ighdmehidhipcmcojjgiloacoafjmpfk?hl=en)
- Provides some debugging facilities specific to AngularJS


## Reference
- Keep the following open in your browser at all times (see the README)
  - [http://docs.angularjs.org/api/]
  - [http://docs.angularjs.org/guide/]


## Take The Tour

<img src="assets/tourguide.jpg" height="400">

`git co -f angular-seed-tour`


## Exercise 1: Hello World

```
# Get the code
git co -f ex-1-start

# Run the tests
./scripts/e2e-test.sh
```

The tests should fail, you get to make them pass


## Exercise 1 : Hello World

```markdown
> look

You are in a Twitter code sample factory. You must tweet for your
very survival. You only have a commondore64 and the following HTML
attributes.

ng-show, ng-hide, ng-disabled, ng-model and {{}}

Good luck.
>
```


## Exercise 1 : Hints

- `ng-model="myVariable"` (for `<input>` tags)
- `ng-show(hide)="myVariable !== 0"`
- `ng-disabled="myVariable > 25"`
- `<p>{{myVariable}}</p>`

__Good luck...__


## Excercise 1 : Lesson's Learned

`git co -f ex-2-solution`

- AngularJS is _declarative_
- We have not even written any Javascript
- Two-way binding that "just works."
- ng-show/hide, ng-disabled, ng-model, expressions


## Expressions

`{{ 1 + 1 }}`

- Angular has a parser for expressions
- These expressions are very limited
- Expressions are very forgiving so undefined, null etc... are not exceptions
