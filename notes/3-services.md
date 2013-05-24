# Services

## Services
- In actual fact, Services cover a lot, you can define code and data
- For now we think of injecting objects where they're required
- This should encompass all the logic of your app
- Again, this is just injectable code, so you can share code across, controllers, directives, whatever...


## Some Built In AngularJS Services
- $http: yay XHR
- $resource: is a representation of a restful resource
  - This is built atop $http, see previous comments about shared code


## Digression: Promises
- Use promises to encapsulate asynchronous work
- These can be composed and have a nice fluent API


## Dependency Injection
- In fact, directives, controllers, etc... are in fact "services" just like everything else


## Services Often Depend Upon Other Services
- self-explanatory


## So Can We
- Module dependencies aren't injection of an object, they describe initialization order
  - initialization defines what becomes available for injection
- Angular prefixes many things with $, to avoid collisions


## DI Examples
- modules can describe, services, factories, controllers, etc...
- these have names and their own dependencies
- all of these are only executed when requested, and only once, they're singletons
- factories are a function that's executed, the returned object is the service that's used
- services are constructor functions that are new'd
  - the astute might have noticed this is how filters, controllers, and directives work
