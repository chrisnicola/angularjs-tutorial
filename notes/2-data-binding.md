# Data Binding


# Wiring up a controller

## The Principles
- The following don't need to be completely understood, just remember these as touch stones if you're lost


## Controller -> Scope -> View
- The controller should push onto the scope for the view
- Controllers expose data and code (in the form of functions)
- Views then take these and bind them or use the data to drive rendering


## Scopes are symbol tables where shadowing and lookup can be selective/controlled
- Angular, at it's core, is a framework to write a DSL
- Programming languages have various scoping rules for different constructs, same here
  - Blocks
  - Functions
  - Methods
  - Classes
  - Namespaces


## Angular works on the basis of dirty checking *not* observation/events
- Instead of events we have scope.$apply (akin to transaction)
- Angular takes care of this implicitly, by "wrapping" everything in an scope.$apply
  - Wrapping is done by an $apply call be lower down on the call stack
- A naive implementation is O(n), and this can be thought of worst case


## Review:
- If you get furstrated, remember these
- Angular is bottom up programming
  - Assuming HTML/CSS/JS suck at expressing your problem/solution
  - Write the language to express the solution to your problem
  - Write your solution with ease
- Scopes:
  - Get away from a flat global namespace
  - And reduce the size of n in the O(n) algorithm
- It's only different in terms of their design decisions
  - Events vs Unit of Work is like Content snapshots (git) vs Diffs (svn)

## Controllers
- Given a name, MainController, and Constructor:
  - Instruct angular how to provide that particular controller
- Then the controller exposes data and, ideally semantically relevant, actions on the scope
- Scope
  - It's dependency injected
  - Which scope depends on where the controller is used (yay, decoupled)


## A Basic Example
- Git Tag: controller-wiring

## Binding to the View
- Custom elements and attributes direct angular what to do
- It's how anuglar knows what to do
