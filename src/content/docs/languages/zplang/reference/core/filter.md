---
title: Filter
sidebar:
    label: filter
---

### Syntax

```clojure
(filter pred arr)
```

### Description

The `filter` function takes a predicate function `pred` and an array `arr` and returns a new array containing only the elements of `arr` for which `pred` returns true.

### Returns

The `filter` function returns a new array containing only the elements of `arr` for which the predicate function `pred` returns true.

### Parameters

- `pred`: The predicate function to apply to each element of the array. It must take one argument and return a boolean value.
- `arr`: The array to filter.

### Examples

#### Filtering an Array

```clojure
(filter even? [1 2 3 4 5])
;;=> [2 4]

(filter [val] => (> val 3) [1 2 3 4 5])
;;=> [4 5]

(filter [val] => (= (mod val 3) 0) [1 2 3 4 5])
;;=> [3]
```

### Notes
- The `filter` function is commonly used to extract elements from an array based on certain criteria defined by the predicate function.
- It returns a new array, maintaining the order of elements in the original array.
- The predicate function `pred` should return true for elements that are to be included in the filtered array.
