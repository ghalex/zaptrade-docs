---
title: Buy Amount
description: Generates a new buy order
sidebar:
  label: buyAmount
---

### Syntax

```clojure
(buyAmount {asset} amount options?)
```

### Description

The `buyAmount` function generates a buy order for a specified symbol and amount. It returns an order object containing information about the buy action.
The function also supports additional options to control order generation based on existing open positions.

### Returns

The `buyAmount` function returns an order object containing information about the buy action. If the order is not generated due to existing open positions, it may return `null`&#x20;

### Parameters

- `{asset}`: asset to be bought
- `amount`: amount to be bought.
- `options?`
  - `target`: checks openPositions and generates order to balance portfolio
  - `round`: round the number of shares to the nearest whole number

### Examples

```clojure
(buyAmount {AAPL} 200)            ;; buys 1.29 shares of AAPL if price is 155
;;=> order {symbol: "AAPL", action: "buy", units: 1.29, ....}

(buyAmount {AAPL} 200 {round: true})    ;; buys 1 shares of AAPL if price is 155
;;=> order {symbol: "AAPL", action: "buy", units: 1, ....}
```