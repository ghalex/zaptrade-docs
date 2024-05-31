---
title: Exponential Moving Average
sidebar:
    label: ema
---

### Syntax

```clojure
(ema len symbol options?)
(ema len data)
```

### Description

The `ema` function calculates the Exponential Moving Average (EMA) for a given symbol over a specified period. The function can also be applied directly to an array of numerical data to calculate the EMA. The EMA places more weight on recent data points, making it more responsive to short-term price changes compared to the Simple Moving Average (SMA).

### Returns

The `ema` function returns a single EMA value by default. If the `rolling` option is specified, it returns an array of EMA values for the specified rolling period.

### Parameters

- `len`: The length of the period over which to calculate the EMA.
- `symbol`: The symbol for which to calculate the EMA.
- `options?` (optional): An object with the following optional properties:
  - `rolling`: The number of days for which to return the EMA values. If specified, an array of EMA values is returned.
  - `offset`: The number of days ago to start the calculation. Default is 0 (current day).
  - `prop`: The property of the data to use for calculation. Default is `'close'`. This option is only applicable when using with symbol.

:::note
When using `ema` with data the number of data needs to be double the `len` value
:::

### Examples

#### Using with Symbol and Length

```clojure
;; Calculate the 21-day EMA for AAPL
(ema 21 "AAPL")
;;=> 155.2 (example value)

;; Calculate the 21-day EMA for AAPL, 5 days ago
(ema 21 "AAPL" {offset: 5})
;;=> 153.8 (example value)

;; Calculate the 21-day EMA for AAPL with a rolling period of 3 days
(ema 21 "AAPL" {rolling: 3})
;;=> [154.5, 155.0, 155.5] (example values)
```

#### Using with Data Array

```clojure
;; Calculate the EMA for an array of numbers with default options
(ema 5 [1, 2, 3, 4, 5])
;;=> 3.2 (example value)

;; Calculate the EMA for an array of numbers with a rolling period of 2
(ema 5 [1, 2, 3, 4, 5, 6, 7, 8] {rolling: 2})
;;=> [2.7, 3.7] (example values)
```

### Use Cases

**Identifying Trend Reversals:**
```clojure
;; Calculate the 50-day EMA for AAPL and detect trend reversals
(def ema50 (ema 50 "AAPL"))

;; Use the EMA value in a trading strategy
(if (< (:close {AAPL}) ema50)
    (sell {AAPL} 10)
    (buy {AAPL} 10)
)
```

**Applying EMA Crossover Strategy:**
```clojure
;; Calculate the 12-day and 26-day EMAs for MSFT
(def ema12 (ema 12 "MSFT"))
(def ema26 (ema 26 "MSFT"))

;; Detect EMA crossover to generate buy or sell signals
(if (< ema12 ema26)
    (sell {MSFT} 10)
    (buy {MSFT} 10)
)
```

### Notes
- The `ema` function is a versatile indicator widely used in technical analysis for trend following, momentum analysis, and detecting potential reversals.
- Similar to the SMA, the EMA can be used with different periods to analyze short-term or long-term trends.
- Traders often use EMA crossovers as signals for entering or exiting positions, where a bullish crossover (short-term EMA crossing above long-term EMA) signals a potential buy, and a bearish crossover (short-term EMA crossing below long-term EMA) signals a potential sell.
