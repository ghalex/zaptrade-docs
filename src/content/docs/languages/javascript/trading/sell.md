---
title: Sell
description: Generates a new sell order
sidebar:
  label: sell
---

### Syntax

```javascript
this.sell(asset, shares, options?)
```

### Description

The `sell` function generates a sell order for a specified symbol and number of units. It returns an order object containing information about the sell action.
The function also supports additional options to control order generation based on existing open positions.

### Returns

The `sell` function returns an order object containing information about the sell action. If the order is not generated due to existing open positions, it may return `null`&#x20;

### Parameters

- `{asset}`: asset to be sold
- `shares`: the number of units (shares, contracts, etc.) to be sold.
- `options?`
  - `target`: checks openPositions and generates order to balance portfolio
  - `round`: round the number of shares to the nearest whole number

### Examples

```javascript
// Sells one share of AAPL
this.sell("AAPL", 1);
//=> order {symbol: "AAPL", action: "sell", units: 1, ....}

// openPositions = [{symbol: "AAPL", side: "short", units: 1}]
this.sell("AAPL", 1, { target: true });
// Will not generate an order because openPositions already has 1 share of AAPL short
```