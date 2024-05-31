---
title: Has Position
sidebar:
  label: hasPosition
---

### Syntax

```clojure
(hasPosition symbol side)
```

### Description

The `hasPosition` function checks whether there is an open position for a specified symbol and side (either "long" or "short") in the current trading portfolio.
This function is useful for determining if a position already exists before making additional trades or rebalancing the portfolio.


### Returns

The `hasPosition` function returns a boolean value:

- `true` if an open position exists for the specified symbol and side.
- `false` if no such position exists.

### Parameters

- `symbol`: The ticker symbol of the asset to check.
- `side`: The side of the position to check, either "long" or "short".

### Examples

```clojure
(def symbol "AAPL")
(if (not (hasPosition symbol "long"))
  (buy {symbol} 1)
  (print "Already have a long position in " symbol)
)
```