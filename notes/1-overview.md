# AngularJS


## Intros

### Chris Nicola
- 

### Saem Ghani
- I came to Angular as a refuge from ExtJS, Ember, jQuery
- I'm a backend programmer that happens to need UIs
- JavaScript, relatively speaking, is weird


## Syllabus
- This is a rough schedule
- If we motor through it, then onto hard questions that will undoubtedly be hard to answer


## More Play, Less Slides
- Ideally you learn angular on your own
- we'll try and make that happen but nudge you along
- hopefully through a path of least resistance



## The Angular Philosophy
- Misko Hevery, a Google Test Engineer, created this to allow for rapid development of intranet applications
- What came about was a language for declaratively creating apps
- Defined around a small library which defines the aforementioned language
- This language, 'Angular Core', can be employed to build our own Application UI DSL


## Key Concepts

### MVC Pattern
- Of course, this is Angular's own special take on it

### Modularity
- Please do not think AMD (Asynchronous Modules Definitions)
- This is all about dependency injection (DI/IoC)

### Extensability
- The framework is written in a modular fashion hence everything can be overriden

### Testability
- It's everywhere, and in earnest
- This tutorial will be no exception



## Getting Setup
- Chrome
  - Developer tools and the angular plugin, firefox in a pinch
- Node
  - Will run a local server, you could get by with disabling browser security
- karma (sudo npm install -g karma)
  - This will run all the tests and "mark" your work
- Git
  - If you don't know it/have it just pair with someone, we don't know?


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
- scripts
  - web-server.js
  - test.sh
  - e2e-test.sh
- index.html
  - ng-app to inform angular that this is an application
  - ng-view direct the application to render the view here
  - weird app-version attribute
- app.js
  - creates a module
  - depends upon other modules being defined
  - configures the '$routeProvider' service
    - given a particular URL render a template driven by a controller
    - fallback to a particular URL if unmatched
- controllers.js
  - basic empty controllers
  - Give them a name
  - Tell angular how to build them
  - the key to note is that they're simply functions
- directives.js
  - this is where angular is "different"
  - given the core of angular we can define language constructs to extend HTML
  - name the directive, which gets mangled when referred to in HTML
    - the mangling is all lower case with a hyphen separating words instead of upper cased characters
  - we specify it's dependencies (notice a pattern?)
    - wrap the whole thing in an array
    - specify as a string
    - those are passed in order to the last item in the array (your fn)
  - then we return a function (happens to be a link function)
    - which shall be passed a scope
      - the thing that holds code and data from the controller
      - more importantly we're building a declarative language, it's the scope!
    - the element it's declared upon (jquery in this case)
    - associated attributes of the element as a hash
    - the body instructs angular what to do when 'linking' this directive to data on the scope
- filters.js
  - filters are pipeline functions are that can be used to transform expression values
  - keep them light as they run all the time
  - they're defined like everything else in regards to dependency injection
  - ultimately they return, an ideally pure, function
- services.js
  - these are the catch all for when you have things that do *not* fit into controllers, directives, etc...
  - defined like the rest
  - you can define, values, constants, services, factories, providers and all sorts of things
  - all of which will be covered later, a value is anything, and can vary over time, unlike constants
- partials
  - these are fragments that can be used as views for screens/pages or for more complicated directives
- tests
  - unit
    - directivesSpec.js
      - uses jasmine
      - we load the module which has the SUT (first use of module)
      - we call module, requiring "$provide", the root of all dependency injection, and configure value to be 'TEST_VER'
      - via inject we ask for a $compile and $rootScope, note:
        - a) the angular compiler is available to us
        - b) the scope has a root, as in it's a tree, as scopes are in real languages
      - we compile some markup, bind our data to it, and set an expectation
  - e2e
    - runner.html
      - runs all the tests and nicely reports them
    - scenarios.js
      - jasmine again, except now we have an API to pretend to be the browser
      - without going into too much detail much of this involves a mock browser walking the app


## Hello World
- Git Tag: hello-world
- Complete the objectives as per the README.md


## Bind to a Scope Variable
- 


## Disable Elements
- 


## Hide/Show Elements
- 


## Expressions
- 


## Implement Hello World
- Have the class flail for at least five minutes and then start giving hints


## Review

- Big Picture:
  - Look at the API/existing code carefully, as it might already provide what you need



