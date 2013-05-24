# Templates

## Templates
- Compilation is a service, one that can be injected


## The ng-include Directive
- move along


## The ng-include Directive
- The secret hidden answer: the route and the controller


## Routing
- config can be called on a particular type of angular service called providers
- the routing service is a provider, and we configure the routes on it
- For the curious:
  - Angular's injection is based on providers
  - A provider is a constructor or an object with a $get method which gets called on initialization
  - this $get method is to allow for complex initialization, configuration, and then complex creation


## Routing Events
- Frankly, these are handy, but usually, thanks to dirty checking and two way data binding this is seldom used


## Resolving
- yes, given a fragment indicate which view and controller


## Resolving
- This is what it looks like
- notice how wait is resolved as per DI
