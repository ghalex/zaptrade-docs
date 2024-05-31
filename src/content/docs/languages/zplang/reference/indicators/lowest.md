---
title: Lowest
sidebar:
    label: lowest
---

### Syntax

```clojure
(lowest len symbol options?)
(lowest len data options?)
```

### Description

The `lowest` function calculates the lowest value over a specified period for a given symbol or array of numerical data. It identifies the minimum value within the specified length of time. By default, it uses the closing price, but you can specify a different property using the `prop` option.

### Returns

The `lowest` function returns a single lowest value by default. If the `rolling` option is specified, it returns an array of lowest values for the specified rolling period.

### Parameters

- `len`: The length of the period over which to calculate the lowest value.
- `symbol` or `data`: Either the symbol for which to calculate the lowest value or an array of numerical data.
- `options?` (optional): An object with the following optional properties:
  - `rolling`: The number of days for which to return the lowest values. If specified, an array of lowest values is returned.
  - `offset`: The number of days ago to start the calculation. Default is 0 (current day).
  - `prop`: The property of the data to use for calculation. Default is `'close'`. This option is only applicable when using with symbol.

### Examples

#### Using with Symbol and Length

```clojure
;; Calculate the lowest closing price for AAPL over the last 30 days
(lowest 30 "AAPL")
;;=> 140.2 (example value)

;; Calculate the lowest low price for AAPL over the last 30 days
(lowest 30 "AAPL" {prop: 'low'})
;;=> 137.7 (example value)
```

#### Using with Data Array

```clojure
;; Calculate the lowest value for an array of numbers with a length of 5 (data is the last 5 days)
(lowest 5 [140, 138, 135, 138, 132])
;;=> 132 (example value)
```

### Use Cases

**Identifying Bottoms in Price Data:**
```clojure
;; Calculate the lowest closing price for AAPL over the last 30 days
(def lowestPrice (lowest 30 "AAPL"))

;; Use the lowest closing price value in a trading strategy
(if (> (:close {AAPL}) lowestPrice)
    (buy {AAPL} 10)
    (sell {AAPL} 10)
)
```

**Setting Buy Entry Points Based on Low Price:**
```clojure
;; Calculate the lowest low price for GOOGL over the last 20 days
(def lowestLowPrice20Days (lowest 20 "GOOGL" {prop: 'low'}))

;; Use the lowest low price value to set buy entry points
(if (> (:close {GOOGL}) (* 1.05 lowestLowPrice20Days))
    (buy {GOOGL} 5)
    (print "Hold position")
)
```

### Notes
- The `lowest` function is commonly used in technical analysis to identify bottoms in price data and set buy entry points.
- By specifying a different property, such as low price, traders can analyze different aspects of price movements and make informed trading decisions.
- Traders often use the lowest value in conjunction with other indicators to identify potential reversal points and optimize trading strategies.
