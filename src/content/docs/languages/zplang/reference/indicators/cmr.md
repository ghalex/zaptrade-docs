---
title: Cumulative Return
sidebar:
    label: cmr
---

### Syntax

```clojure
(cmr len symbol options?)
(cmr len data)
```

### Description

The `cmr` function calculates the Cumulative Returns (CMR) for a given symbol over a specified period. CMR represents the total percentage change in price over the specified period, including both price appreciation and dividends. The function can also be applied directly to an array of numerical data to calculate the CMR.

### Returns

The `cmr` function returns a single CMR value by default. If the `rolling` option is specified, it returns an array of CMR values for the specified rolling period.

### Parameters

- `len`: The length of the period over which to calculate the CMR.
- `symbol`: The symbol for which to calculate the CMR.
- `options?` (optional): An object with the following optional properties:
  - `rolling`: The number of days for which to return the CMR values. If specified, an array of CMR values is returned.
  - `offset`: The number of days ago to start the calculation. Default is 0 (current day).
  - `prop`: The property of the data to use for calculation. Default is `'close'`. This option is only applicable when using with symbol.

### Examples

#### Using with Symbol and Length

```clojure
;; Calculate the CMR for AAPL over the last 30 days
(cmr 30 "AAPL")
;;=> 0.08 (example value)

;; Calculate the CMR for AAPL over the last 30 days, starting 5 days ago
(cmr 30 "AAPL" {offset: 5})
;;=> 0.05 (example value)

;; Calculate the CMR for AAPL with a rolling period of 5 days
(cmr 30 "AAPL" {rolling: 5})
;;=> [0.03, 0.04, 0.05, 0.06, 0.07] (example values)
```

#### Using with Data Array

```clojure
;; Calculate the CMR for an array of returns data with default options
(cmr [0.02, 0.03, 0.05, 0.02, 0.04])
;;=> 0.16 (example value)

;; Calculate the CMR for an array of returns data with a rolling period of 3
(cmr [0.02, 0.03, 0.05, 0.02, 0.04] {rolling: 3})
;;=> [0.10, 0.12, 0.14] (example values)
```

### Use Cases

**Evaluating Historical Performance:**
```clojure
;; Calculate the CMR for AAPL over the last 90 days
(def cmr90 (cmr 90 "AAPL"))

;; Use the CMR value to evaluate historical performance
(if (> cmr90 0)
    (print "Positive historical performance")
    (print "Negative historical performance")
)
```

**Comparing Performance Across Securities:**
```clojure
;; Calculate the CMR for multiple securities and compare performance
(def cmrAAPL (cmr 30 "AAPL"))
(def cmrMSFT (cmr 30 "MSFT"))

;; Use the CMR values to compare performance between AAPL and MSFT
(if (> cmrAAPL cmrMSFT)
    (print "AAPL has outperformed MSFT")
    (print "MSFT has outperformed AAPL")
)
```

### Notes
- The `cmr` function is a useful tool for evaluating historical performance and comparing returns across different securities or portfolios.
- CMR is calculated as the cumulative percentage change in price over the specified period, making it a valuable metric for assessing investment performance.
- Traders and investors often use CMR to analyze past performance trends and make informed decisions about future investments.
