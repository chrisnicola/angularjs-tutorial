# Directives

## Simple Directives
- Loller Skates
- Provide an overview of terms, but caution that not all is necessary, just that anything is possible
- directives direct angular, the DSL framework, as to what to do when interpretting declarations
- They're a facility to write new language syntax and semantics
- languages have rules like:
  - precedence (priority)
  - a facility to allow interaction for other elements (controller)
  - intrinsic/bytecode expansion (template/templateUrl)
  - rules for interaction with other elements (replace, transclude)
    - some languages don't allow inner classes
    - static can't be put everywhere
    - methods can only be delcared inside classes
    - outside they're functions
  - They have rules as to visibility, control over scope (scope, isolates)
  - compile each instance compiles a certain way (compile)
    - compilation can be multistaged (pre/post linking)
  - but based on usage bind differently (link)

## Simple Directives
- we're returning the link function, this is invoked for each instance to handle that specific instance
- jqLite is a lite version of jQuery, it steps aside if you use jQuery
- it's enough to do basic DOM manipulation


## Directive Templates
- Captian Picard would be so proud
- restrict to Element, instead of Attribute, Class, coMment
- Replace the element with the template contents
- The template is this awesome ascii-art
- Then when we put down the facepalm tag, awesome ensues


## Directive Templates
- scope: true
  - create an environment that we look up values in first before looking at parents
- Whenever this directive is applied we get a new scope in that part of the document
- The link function is exposing data on each of these scopes
- Which is bound to the item within the template
- Wherever this is put, we'll get "My Value"


## Directive Controllers
- This allows you to provide logic/API for other directives to interact with you
- The homepage illustrates a tab controller:
  - panes to select themselves
  - register themselves with the tabs


## Directive Controller
- Instead of using the angular provided $timeout we're using setInterval
- When the timeout is actually called, we're outside of an apply/digest
- This is what prompts angular to do dirty checking

## Transclusion
- Totally a real computer "science" word
- Here the elemented marked with ng-transclude will have the internals of this element compiled and injected
- and two of the greatest directives, likely to be every written, come together!
- Note: because it's css changes, we don't need angular to apply/digest


## Directive Scope: '@'
- One way data binding
- Optionally an alias can be prefixed, to decouple attribute names from scope properties
- Bind a local scope property to the value of the DOM attribute
  - DOM attributes evaluate to strings


## Directive Scope: '='
- Two way data binding
- Optionally an alias can be prefixed, to decouple attribute names from scope properties


## Directive Scope: '&'
- Evaluates an expression in the parent scope and provides the value
- here the expression could be a function, like we would specify for ng-click
