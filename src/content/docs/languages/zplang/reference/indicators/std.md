---
title: Standard Deviation
sidebar:
    label: std
---

### Syntax

```clojure
(std len symbol options?)
(std len data options?)
```

### Description

The `std` function calculates the standard deviation of price data over a specified period for a given symbol or array of numerical data. Standard deviation measures the dispersion or spread of a dataset relative to its mean. It provides insights into the volatility or risk associated with the price movements of an asset.

### Returns

The `std` function returns a single value representing the standard deviation of the price data over the specified period. If the `rolling` option is specified, it returns an array of standard deviation values for the specified rolling period.

### Parameters

- `len`: The length of the period over which to calculate the standard deviation.
- `symbol` or `data`: Either the symbol for which to calculate the standard deviation or an array of numerical data.
- `options?` (optional): An object with the following optional properties:
  - `rolling`: The number of data points for which to return the standard deviation values. If specified, an array of standard deviation values is returned.
  - `offset`: The number of data points ago to start the calculation. Default is 0 (current data point).
  - `prop`: The property of the data to use for calculation. Default is `'close'`. This option is only applicable when using with symbol.

### Examples

#### Using with Symbol and Length

```clojure
;; Calculate the 20-day Standard Deviation for AAPL using the high prices
(std 20 "AAPL" {prop: 'high'})
;;=> (example value)

;; Calculate the 20-day Standard Deviation for AAPL with rolling values for the last 5 days using the low prices
(std 20 "AAPL" {rolling: 5, prop: 'low'})
;;=> (example value)
```

#### Using with Data Array

```clojure
;; Calculate the Standard Deviation for an array of bars data
(std 5 [50, 52, 48, 55, 51, 49, 53, 57, 54, 56, 55, 52, 58, 60])
;;=> (example value)
```

### Use Cases

**Assessing Volatility and Risk:**
```clojure
;; Calculate the 20-day Standard Deviation for AAPL using the high prices
(def stdValue (std 20 "AAPL" {prop: 'high'}))

;; Use the standard deviation value to assess volatility and risk
(if (> stdValue threshold)
    (print "High volatility, consider adjusting risk management strategies")
    (print "Volatility within acceptable range")
)
```

**Detecting Price Extremes:**
```clojure
;; Calculate the 20-day Standard Deviation for AAPL using the low prices
(def stdValue (std 20 "AAPL" {prop: 'low'}))

;; Use the standard deviation value to detect price extremes
(if (> (:close {AAPL}) (+ (:close {AAPL}) (* 2 stdValue)))
    (sell {AAPL} 10)
    (print "No extreme price action detected")
)
```

### Notes
- Standard deviation is a widely used statistical measure in finance for assessing volatility and risk.
- A higher standard deviation value indicates greater price volatility, while a lower value indicates lower volatility.
- Traders often use standard deviation in conjunction with other technical indicators to make informed trading decisions, such as setting risk management strategies or identifying potential price extremes.
