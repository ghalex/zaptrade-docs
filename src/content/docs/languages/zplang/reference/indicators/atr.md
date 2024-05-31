---
title: Average True Range
sidebar:
    label: atr
---

### Syntax

```clojure
(atr len symbol options?)
(atr len bars options?)
```

### Description

The `atr` function calculates the Average True Range (ATR) over a specified period for a given symbol or array of bars data. ATR measures market volatility by analyzing the trading range of an asset. It provides insights into the average price movement of an asset over a defined period, taking into account gaps and limit moves.

### Returns

The `atr` function returns a single value representing the average true range over the specified period. If the `rolling` option is specified, it returns an array of ATR values for the specified rolling period.

### Parameters

- `len`: The length of the period over which to calculate the ATR.
- `symbol` or `bars`: Either the symbol for which to calculate the ATR or an array of bars data, where each bar contains `{open, close, low, high}`.
- `options?` (optional): An object with the following optional properties:
  - `rolling`: The number of bars for which to return the ATR values. If specified, an array of ATR values is returned.
  - `offset`: The number of bars ago to start the calculation. Default is 0 (current bar).

### Examples

#### Using with Symbol and Length

```clojure
;; Calculate the 14-day Average True Range (ATR) for AAPL
(atr 14 "AAPL")
;;=> (example value)

;; Calculate the 14-day ATR for AAPL with rolling values for the last 5 days
(atr 14 "AAPL" {rolling: 5})
;;=> (example value)
```

#### Using with Bars Data

```clojure
;; Calculate the 14-day ATR for bars data (each bar contains {open, close, low, high})
(atr 14 [{open: 50, close: 52, low: 48, high: 55}, {open: 52, close: 49, low: 47, high: 54}, ...])
;;=> (example value)
```

### Use Cases

**Implementing Trailing Stop Loss Strategy:**
```clojure
;; Calculate the 14-day ATR for AAPL bars data
(def atrValue (atr 14 "AAPL"))

;; Use the ATR value to implement a trailing stop loss strategy
(if (< (:close {AAPL}) (- (:close {AAPL}) (* 1.5 atrValue)))
    (sell {AAPL} 10)
    (print "Hold position")
)
```

### Notes
- The ATR indicator was developed by J. Welles Wilder Jr. and is commonly used by traders to measure volatility and set appropriate stop loss levels.
- A higher ATR value indicates higher volatility, while a lower value indicates lower volatility.
- Traders often use the ATR in conjunction with other technical indicators to assess market conditions and make informed trading decisions.
