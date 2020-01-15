# JS Fundamentals
Notes: the examples use a special logger that also logs the line number for better readability.

## Variables

### Hoisting
Run `variables/hoisting.js`
Can you explain what is happening here?
Replace `var` with `const` or `let` and run the example again. What happens?
Can you explain why this behavior by `var` is dangerous and as a results `let` and `const` are preferred?

### Declare vs Assign
Run `variables/declare-vs-assign.js`
Can you explain the difference between declaration and assignment?
Can a variable that was declared using `const` be reassigned?
What is the difference between `Object.freeze` and `const`?
What is another difference between `var` and the other two? What is the last console output tell you about what `var` is doing?
Replace `var` with `let` in the `redeclare` example. What happens? Why is the behavior of `let` is better?

### Scope
Run `variables/scope.js`
What is a variable's scope?
How many scope types are there in JavaScript?
Can you explain the scope of each variable declared in this file?
How is a variable is overriden in another scope?
Can you explain why this demonstrates another reason for superiority of `let` and `const` over `var`?
Does this help you understand why we discourage using same variable names across nested scopes?

### Conclusion
Can you explain when `const` is favorable over `let`?
Can you give at least three reasons for why `var` is bad and you should never use it?

## Primitives vs Objects

## Function

## Prototype

## this

## Mutable vs Immutable

## Array Methods

## Functional programming

## Asynchronous programming
