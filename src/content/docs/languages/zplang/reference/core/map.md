---
title: Map
sidebar:
    label: map
---

### Syntax

```clojure
(map f array)
```

### Description

The `map` function applies a given function `f` to each element of an `array` and returns a new array containing the results of applying `f` to each element. The function `f` can be any function that takes one argument.

### Returns

The `map` function returns a new array where each element is the result of applying the function `f` to the corresponding element of the input array `array`.

:::tip

- The map function applies the specified function to each element of the array in a sequential manner.
- The function passed to map can be a predefined function or an anonymous function defined using the (fn [args] body) syntax.
- The original input array remains unchanged, and a new array is returned with the transformed values.
- The map function is useful for performing transformations on arrays, such as incrementing values, applying mathematical operations, or applying custom functions to each element.

:::

### Parameters

- `f`: The function to apply to each element of the array. It must take one argument.
- `array`: The array over which to map the function `f`. It can be a list, vector, or any other sequential array.

### Examples

#### Mapping over a List

```clojure
(map inc [1 2 3 4 5])
;;=> (2 3 4 5 6)

(map str ["apple" "banana" "cherry"] )
;;=> ("apple" "banana" "cherry")

;; using anonymous functions
(map [s] => (cmr 14 s) ["AAPL", "MSFT"])
;;=> (123, 443)
```


### Notes
- The `map` function is a fundamental tool for functional programming in Clojure and is used extensively for transforming data.
- It allows you to apply a function to each element of a collection without explicitly looping over the elements.
- The resulting collection has the same type as the input collection, whether it's a list, vector, or other sequential collection.
