---
title: Core Functions
sidebar:
    label: Core
---

ZpLang's core functions closely resemble those of Clojure. Below is a comprehensive list of all supported core functions:

### Math

```clojure
;; Math
(+ a b ...)  ;; - Adds the given numbers or arrays.
(- a b ...)  ;; - Subtracts the second number from the first or subtracts array elements.
(* a b ...)  ;; - Multiplies the given numbers or arrays.
(/ a b ...)  ;; - Divides the first number by the second or divides array elements.
(% a b ...)  ;; - Computes the modulus of the first number by the second or computes the modulus of array elements.
(** a b)  ;; - Raises the first number to the power of the second or performs element-wise exponentiation for arrays.
(= a b)  ;; - Checks equality between two values or arrays.
(abs val)  ;; - Computes the absolute value of a number.
(log val)  ;; - Computes the natural logarithm of a number.
(inc val)  ;; - Increments a number by 1.
(identity val)  ;; - Returns the argument as is.
(round val)  ;; - Rounds a number to the nearest integer.
(ceil val)  ;; - Rounds a number up to the nearest integer.
(floor val)  ;; - Rounds a number down to the nearest integer.
(max arr)  ;; - Returns the maximum value from an array or multiple arguments.
(min arr)  ;; - Returns the minimum value from an array or multiple arguments.
```

### Logic

```clojure
;; Logic
(isNil val)  ;; - Checks if a value is undefined or null.
(isNotNil val )  ;; - Checks if a value is not undefined and not null.
(> a b)  ;; - Checks if the first number is greater than the second.
(>= a b)  ;; - Checks if the first number is greater than or equal to the second.
(!= a b)  ;; - Checks inequality between two values or arrays.
(< a b)  ;; - Checks if the first number is less than the second.
(<= a b)  ;; - Checks if the first number is less than or equal to the second.
(?? a defaultVal)  ;; - Returns value if undefined otherwise defaultVal
(not a)  ;; - Negates a boolean value.
(and ...)  ;; - Performs a logical AND operation on multiple values.
(or ...)  ;; - Performs a logical OR operation on multiple values.
(str ...)  ;; - Concatenates multiple values into a string.
(print ...)  ;; - Prints values to the console.
```

### Objects

```clojure
;; Object
(keys obj)  ;; - Retrieves the keys of an object.
(values ojb)  ;; - Retrieves the values of an object.
(json obj)  ;; - Converts a value to a JSON string.
(get obj)  ;; - Retrieves a nested property from an object using a dot-separated path.
(set obj)  ;; - Merges two objects.
(set! obj)  ;; - Merges two objects and mutates the first object.
```

### Array

``` clojure
;; Array
(len array)  ;; - Returns the length of an array.
(indexOf el array)  ;; - Returns the index of the first occurrence of an element in an array.
(push val array)  ;; - Adds an element to the end of an array.
(push! val array)  ;; - Adds an element to the end of an array and mutates the original array.
(pop array)  ;; - Removes the last element from an array.
(pop! array)  ;; - Removes the last element from an array and mutates the original array.
(shift array)  ;; - Removes the first element from an array.
(shift! array)  ;; - Removes the first element from an array and mutates the original array.
(filter lamda array)  ;; - Filters elements of an array based on a predicate function.
(take val array)  ;; - Takes a specified number of elements from the beginning or end of an array.
(reverse array)  ;; - Reverses the order of elements in an array.
(concat arr1 arr2)  ;; - Concatenates two or more arrays.
(sortBy fn array)  ;; - Sorts an array by a specified function.
(reduce lamda array)  ;; - Reduces an array to a single value using a reducer function.
(some lamda array)  ;; - Checks if any element of an array satisfies a condition.
(every lamda array)  ;; - Checks if all elements of an array satisfy a condition.
(size array)  ;; - Returns the length of an array.
(count array)  ;; - Returns the length of an array.
(map lamda array)  ;; - Applies a function to each element of an array.
(first array)  ;; - Returns the first element of an array.
(last array)  ;; - Returns the last element of an array.
(nth idx array)  ;; - Returns the element at the specified index of an array.
```