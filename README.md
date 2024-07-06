# Oop-Javascript
Learning everything about object oriented programming in javascript

# javascript and classes

## OOP

## Object
- collection of properties and method
- toLowerCase

## why use OOP?
- as code becomes complex it, becomes hard to manage and sometimes it become so messi that it hard to utilize anything properly and understand.

Object Literal

- Constructor
- Prototypes
- Classes
- Instances (new, this)

## 4 pillers
Abstraction
Encapsulation
Inheritance
Polymorphism

# Prototype
- when a function is called with new keyword, the function is internally assigned a empty object {}
- this object can be accessed with this keyword
- this object get assigned a prototype property
- adding methods or variables if better under prototype property if we want to use it accross all the time.

# Prototype Chain
- when trye to access some method or property of object it first looks on it's own proerty and then it's prototype property.
- if not found, it then looks at own propereties of prototype and prototype of prototype.
- untill the end if it finds the property then it is used.
- example while hasOwnProperty() method which is assigned to Object prototype but it can be used with any other object like String()
