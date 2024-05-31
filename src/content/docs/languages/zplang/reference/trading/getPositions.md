---
title: Get Positions
sidebar:
  label: getPositions
---

### Syntax

```clojure
(getPositions)
```

### Description


The `getPositions` function retrieves a list of all currently open positions in the trading portfolio. This function is useful for monitoring the current holdings and their status, which can then be used for making informed trading decisions, such as rebalancing the portfolio or applying stop-loss conditions.

### Returns

An array of objects, where each object represents an open position. Each object contains the following properties:

- `symbol`: the ticker symbol of the asset.
- `openDate`: position open date
- `openPrice`: position open price
- `closeDate`: position close date
- `closePrice`: position close price
- `units`: position units
- `side`: position side
- `stats`
  - `pl`: position current pl
  - `plPct`: position pl in percentage
  - `duration`: open duration in hours

### Examples

```clojure
;; Retrieve open positions
(def openPositions (getPositions))

;; Loop through each position and print its details
(loop position in openPositions
  (print (str "Symbol: " (:symbol position)))
  (print (str "Units: " (:units position)))
  (print (str "Price: " (:price position)))
  (print (str "P/L: " (:pl position)))
)
```