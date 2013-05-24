# Advanced Topics

## Application Architecture
- At least one person wanted a blurb on this
- Basically cover two of the popular strategies that are used to organize angular apps


## Like with Like
- Much of the tooling does this
- It provides a default that's easy to reason about for tools developers
- But then someone decides to change the formatting for a whole file -- thanks!
- It's painful, run away from this


## DDD/SOLID
- Domain Driven Design
  - ubiquitous language
  - build around application concepts
  - aggregates and boundaries
  - anti-corruption layers
- SOLID
  - Single reponsibility (do one thing)
  - Open/closed (open for extension, closed for modification)
  - Liskov subsitution (a sub-type should always be valid wherever the super type is)
  - Interface segregation (small narrow interfaces)
  - Dependency inversion (depend on abstractions)
- Didn't have time to write an app, so we'll talk about a skeleton
- Review angular-seed for those who need it
- Compare and contrast that with this layout


## DDD/SOLID: Tweet.js
- Thematically/Conceptually group items


## DDD/SOLID


## ngModelController
- This is likely the most used directive
- It shouldn't be thought of something special
- Hopefully by now it should be obvious how little magic angular has
- This is how one gets at some of the API
- More importantly, get comfortable with diving into the code and internals
