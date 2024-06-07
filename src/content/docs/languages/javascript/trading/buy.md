---
title: Buy
description: Generates a new buy order
sidebar:
  label: buy
---

### Syntax

```javascript
this.buy(asset, shares, options?)
```

### Description

The `buy` function generates a buy order for a specified symbol and number of units. It returns an order object containing information about the buy action.
The function also supports additional options to control order generation based on existing open positions.

### Returns

The `buy` function returns an order object containing information about the buy action. If the order is not generated due to existing open positions, it may return `null`&#x20;

### Parameters

- `asset`: asset to be bought
- `shares`: the number of units (shares, contracts, etc.) to be bought.
- `options?`
  - `target`: checks openPositions and generates order to balance portfolio
  - `round`: round the number of shares to the nearest whole number

### Examples

```javascript
// buys one share of AAPL
this.buy("AAPL", 1)
//=> order {symbol: "AAPL", action: "buy", units: 1, ....}

// openPositions = [{symbol: "AAPL", side: "long", units: 1}]
this.buy("AAPL", 1, { target: true })
// will not generate a order because openPositions already has
// 1 share of AAPL long
```