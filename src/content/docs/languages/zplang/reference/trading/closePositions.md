---
title: Close Positions
sidebar:
  label: closePositions
---

### Syntax

```clojure
(closePositions positions?)
```

### Description

The `closePositions` function generates orders to close specified open positions in the trading portfolio. If no positions are specified, it closes all open positions.
This function is useful for managing risk, taking profits, or rebalancing the portfolio by exiting positions that no longer fit the trading strategy.


### Returns

The `closePositions` function returns an array of order objects containing information about the close actions. See [getOrders](../getorders)

### Parameters

- `positions`:  (Optional) An array of position objects to be closed. If omitted, the function will close all open positions.

### Examples

```clojure
(closePositions)
;;=> orders to close all open positions

;; Stop-Loss Mechanism:
(loop position in (getPositions)
  (def symbol (:symbol position))
  (def currentPrice (:close {symbol}))
  (def sma21 (sma 21 symbol))
  
  (if (< currentPrice sma21)
    (closePositions [position])
    (print "No action needed for " symbol)
  )
)
```