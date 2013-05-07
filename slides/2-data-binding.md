# Data Binding
## Section 2



# Principals
## For when things get confusing


## Controller -> Scope -> View
- Controllers expose code and data
- Scopes contain/namespace it
- Views render data and bind code


## Scopes: Symbol Tables
- Angular is a framework to write your application DSL
- You want control over scoping semantics
- This puts you in charge of the symbol table


## Angular uses dirty checking not observers/events
- Instead of firing events we apply sets of changes
- The naive implementation of dirty checking is O(n)


## Review:
- Controller -> Scope -> View
- Scopes: Symbol Tables
- Dirty Checking



## Example: Wiring Up a Controller



## Example: Binding to Objects and Variables



## Example: Binding to Functions



## Scope, Watches, Digest, and Events
- 
