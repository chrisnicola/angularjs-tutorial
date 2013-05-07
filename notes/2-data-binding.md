# Data Binding


# Wiring up a controller

## The Principles
- The following don't need to be completely understood, just remember these as touch stones if you're lost


## The scope is how the controller presents data to the view
- The controller should push onto the scope for the view
- Controllers expose data and code (in the form of functions)
- Views then take these and bind them or use the data to drive rendering


## Scopes are symbol tables where shadowing and lookup can be selective/controlled
- Angular, at it's core, is a framework to write a DSL
- Programming languages have various scoping rules for different constructs, same here
- Dynamic vs lexical
- Blocks, functions, methods, etc...


## Angular works on the basis of dirty checking *not* observation/events
- Instead of events we have scope.$apply (akin to transaction)
- A naive implementation is O(n), and this can be thought of worst case

## A Basic Example
- Git Tag: 01-controller-wiring



# Binding to objects and variables
# Binding to functions
# Scope watches, digest and events
# Iteration
# Filters
# Forms binding and validation
# Build: A two-way bound form with validation
# Build: Create some custom filters
