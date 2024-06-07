---
title: Balance
sidebar:
  label: balance
---

### Syntax

```javascript
balance(options?)
```

### Description

The `balance` function adjusts the portfolio by analyzing the current open positions and the generated orders, then creates new orders to ensure the portfolio matches the desired composition.
This function ensures that the portfolio aligns with the latest trading strategy by generating buy or sell orders to balance the positions.
The function can be customized with optional parameters to control the balancing behavior.


### Returns

The `balance` function returns an array of order objects that balance the portfolio based on the current open positions and generated orders.

### Parameters

- `options?` (optional): An object with the following optional properties:
  - `minAmount`: The minimum difference in value required to generate balancing order.

### Examples

```javascript
// Let's say we have 4 units AAPL and 3 units of TSLA

this.buy("AAPL", 5);
this.balance();

// => will generate Sell TSLA & Buy 1 unit of AAPL
```