---
title: Highest
sidebar:
    label: highest
---

### Syntax

```clojure
(highest len symbol options?)
(highest len data options?)
```

### Description

The `highest` function calculates the highest value over a specified period for a given symbol or array of numerical data. It identifies the maximum value within the specified length of time. By default, it uses the closing price, but you can specify a different property using the `prop` option.

### Returns

The `highest` function returns a single highest value by default. If the `rolling` option is specified, it returns an array of highest values for the specified rolling period.

### Parameters

- `len`: The length of the period over which to calculate the highest value.
- `symbol` or `data`: Either the symbol for which to calculate the highest value or an array of numerical data.
- `options?` (optional): An object with the following optional properties:
  - `rolling`: The number of days for which to return the highest values. If specified, an array of highest values is returned.
  - `offset`: The number of days ago to start the calculation. Default is 0 (current day).
  - `prop`: The property of the data to use for calculation. Default is `'close'`. This option is only applicable when using with symbol.

### Examples

#### Using with Symbol and Length

```clojure
;; Calculate the highest closing price for AAPL over the last 30 days
(highest 30 "AAPL")
;;=> 155.2 (example value)

;; Calculate the highest high price for AAPL over the last 30 days
(highest 30 "AAPL" {prop: 'high'})
;;=> 158.7 (example value)
```

#### Using with Data Array

```clojure
;; Calculate the highest value for an array of numbers with a length of 5 (data is the last 5 days)
(highest 5 [150, 152, 155, 154, 158])
;;=> 158 (example value)
```

### Use Cases

**Identifying Peaks in Price Data:**
```clojure
;; Calculate the highest closing price for AAPL over the last 30 days
(def highestPrice (highest 30 "AAPL"))

;; Use the highest closing price value in a trading strategy
(if (< (:close {AAPL}) highestPrice)
    (buy {AAPL} 10)
    (sell {AAPL} 10)
)
```

**Setting Stop Loss Levels Based on High Price:**
```clojure
;; Calculate the highest high price for GOOGL over the last 20 days
(def highestHighPrice20Days (highest 20 "GOOGL" {prop: 'high'}))

;; Use the highest high price value to set stop loss levels
(if (< (:close {GOOGL}) (* 0.95 highestHighPrice20Days))
    (sell {GOOGL} 5)
    (print "Hold position")
)
```

### Notes
- The `highest` function is commonly used in technical analysis to identify peaks in price data and set stop loss levels.
- By specifying a different property, such as high price, traders can analyze different aspects of price movements and make informed trading decisions.
- Traders often use the highest value in conjunction with other indicators to manage risk effectively and optimize trading strategies.
