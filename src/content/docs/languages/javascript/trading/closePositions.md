---
title: Close Positions
sidebar:
  label: closePositions
---

### Syntax

```javascript
this.closePositions(positions?)
```

### Description

The `closePositions` function generates orders to close specified open positions in the trading portfolio. If no positions are specified, it closes all open positions.
This function is useful for managing risk, taking profits, or rebalancing the portfolio by exiting positions that no longer fit the trading strategy.


### Returns

The `closePositions` function returns an array of order objects containing information about the close actions. See [getOrders](../getorders)

### Parameters

- `positions`:  (Optional) An array of position objects to be closed. If omitted, the function will close all open positions.

### Examples

```javascript
// Close all open positions
this.closePositions();
//=> orders to close all open positions

// Stop-Loss Mechanism:
this.getPositions().forEach((position) => {
  const { symbol } = position;
  const currentPrice = this.getPrice(symbol, "close");
  const sma21 = this.sma(21, symbol);
  
  if (currentPrice < sma21) {
    this.closePositions([position]);
  } else {
    console.log("No action needed for " + symbol);
  }
});
```