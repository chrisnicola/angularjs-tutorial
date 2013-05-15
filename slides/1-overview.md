# AngularJS


## Intros

### Chris Nicola

[@lucisferre](http://twitter.com/lucisferre)

CTO and co-founder of [WealthBar](http://wealthbar.com)

### Saem Ghani

[@saemg](http://twitter.com/saemg)

Senior software developer at [Lasso Data Systems](http://lassocrm.com)

Organizer of Polyglot Vancouver


## Syllabus

- 1 This (1hr)
- 2 Data Binding (1hr 30mins)
- 3 Services and DI (1hr 30mins)
{{ Lunch Break }}
- 4 Templates and Routing (1hr)
- 5 Directives (2hr)
- 7 Structuring Applications (30 mins)
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


## Key Concepts

### MVC Pattern
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
- git clone [git@github.com:lucisferre/angularjs-tutorial.git]
  - cd angularjs-tutorial && node ./scripts/web-server.js
  - browse to [http://localhost:8000]


## AngularJS Batarang
- There is a convenient link in the 'Getting Batarang' section of the README.md
- Alternatively search for 'AngularJS batarang'


## Reference
- Keep the following open in your browser at all times (see the README)
  - [http://docs.angularjs.org/api/]
  - [http://docs.angularjs.org/guide/]


## The Tour
- Git Tag: angular-seed-tour


## Exercise Hello World
- Git Tag: hello-world
- Run the Tests: ./scripts/e2e-test.sh


## Bind to a Scope Variable
- ng-model
  - allows for two way data binding
  - applied elements such as input, select and textareas
  - expressed as an attribute or class
- hint: check the API docs


## Disable Elements
- ng-disable
  - disables elements based on truthiness of an expression
  - employs the disabled attribute
  - expressed as an attribute or class
- hint: check the API docs


## Hide/Show Elements
- ng-hide/ng-show
  - hides or shows an element based on the truthiness of an expressions
  - employs a style attribute
  - expressed as an attribute or class
- hint: check the API docs


## Expressions
- Angular has a parser for expressions
- These expressions are very limited
- They are very forgiving, so undefined, null etc... are not exceptions
- Think data access
  - There is some fudging with filters and negation of truthiness
- This will come up often enough that you'll learn it over time


## Implement Hello World
- Complete the objectives as per the README.md


## Review

- Practical
  - ng-model: bind UI elements to items on the scope
  - ng-disable: disable element based on the truthiness of an item on the scope
  - ng-hide/ng-show: hide/show an element based on the truthiness of an item on the scope
  - expressions: a DSL for safe evaluation
- Big Picture:
  - Angular already provides a declarative language for many needs
  - Using this application markup language we can already apps (no JS written)



