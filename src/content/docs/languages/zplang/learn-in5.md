---
title: Learn in X minutes
description: Learn zplang in 5 minutes
---

## Basic examples:

ZpLang is written in "forms", which are just lists of things inside parentheses, separated by whitespace.

```clojure
; Comments start with semicolons.

; str will create a string out of all its arguments
(str "Hello" "World") ; => "Hello World"

; Math is straightforward
(+ 1 1) ; => 2
(- 2 1) ; => 1
(* 1 2) ; => 2
(/ 2 1) ; => 2

; Equality is =
(= 1 1) ; => true
(= 2 1) ; => false

; You need not for logic, too
(not true) ; => false

; Nesting forms works as you expect
(+ 1 (- 3 2)) ; = 1 + (3 - 2) => 2
```

## Assets

In ZpLang, the concept of assets allows for dynamic fetching of financial data.

An asset like `{AAPL}` can provide current or historical prices, such as `{AAPL, yesterday}` for the price of Apple stock yesterday.
Additionally, it supports fetching multiple data points, as in `{AAPL, 5 bars}` for the latest five prices or {AAPL, 2 bars, 2 days ago} for historical ranges.

```clojure

; ZpLang has the concept of asset.
{AAPL} ; => {symbol: "AAPL", price: 180, ...}

; You can get the price for today, yesterday or any day
{AAPL, 2 days ago} ; => {symbol: "AAPL", price: 176 -> 2 days ago}
{AAPL, yesterday}

; You can fetch multiple prices at once
{AAPL, 5 bars} ; => [{symbol: "AAPL", price:...}, {symbol: "AAPL", price:...}, ...]
{AAPL, 2 bars, 2 days ago}
```

## Array & Objects

```clojure
; ZpLang has the concept of arrays and objects
; Arrays
[1, 2, 3, 4]

; Get an element from an array
(nth 2 [1, 2, 3, 4])

; Other functions for arrays
(push 2 [2, 3, 4]) ; => [2, 3, 4, 2]
(pop [2, 3, 4]) ; => [2, 3]

; Use filter, map to interact with arrays
(map inc [1, 2, 3]) ; => [2, 3, 4]
(filter even? [1, 2, 3]) ; => [2]

; Use reduce to reduce them
(reduce + [1, 2, 3, 4])
; = (+ (+ (+ 1 2) 3) 4)
; => 10
```

## Vars & Functions

```clojure
; You can create a var using def
(def x 1)
(def asset {AAPL}) ; store an asset

; Use fn to create new functions. A function always returns
; its last statement.
(fn [] "Hello World") ; => fn

; Assign a function to a var
(def hello-world (fn [] "Hello World"))
(hello-world) ; => "Hello World"

; You can shorten this process by using defn
(defn hello-world [] "Hello World")

; The [] is the list of arguments for the function.
(defn hello [name] (str "Hello " name))
(hello "Steve") ; => "Hello Steve"

; Objects
(def myObj {name: "john", age: 21}) ; => {name: "john", age: 21}

; Acces a value from an object
(:name myObj) ; => john
(get "name" myObj) ;=> john

; Assets are treated like objects
(:symbol {AAPL}) ;=> "AAPL"
(:close {AAPL}) ;=> 180 - close price
```

## Conditions & loops

```clojure
;; if Conditions
(if (> 5 3)
    "5 is greater than 3"
    "5 is not greater than 3"
)

(if (<= 10 10)
    "10 is less than or equal to 10"
    "10 is not less than or equal to 10")

;; loop
(loop item in [1, 2, 3, 4]
    (print item)                ;; => prints 1, 2, 3, 4
)
```