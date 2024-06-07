---
title: Sell Amount
description: Generates a new sell order
sidebar:
  label: sellAmount
---

### Syntax

```javascript
this.sellAmount(asset, amount, options?)
```

### Description

The `sellAmount` function generates a sell order for a specified symbol and number of units. It returns an order object containing information about the sel action.
The function also supports additional options to control order generation based on existing open positions.

### Returns

The `sellAmount` function returns an order object containing information about the sell action. If the order is not generated due to existing open positions, it may return `null`&#x20;

### Parameters

- `{asset}`: asset to be sold
- `amount `: the amount to be sold.
- `options?`
  - `target`: checks openPositions and generates order to balance portfolio
  - `round`: round the number of shares to the nearest whole number

### Examples

```javascript
// Sells 1.29 shares of AAPL if price is 155
this.sellAmount("AAPL", 200);
//=> order {symbol: "AAPL", action: "sell", units: 1.29, ....}

// Sells 1 share of AAPL if price is 155
this.sellAmount("AAPL", 200, { round: true });
//=> order {symbol: "AAPL", action: "sell", units: 1, ....}
```