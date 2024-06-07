---
title: Get Orders
sidebar:
  label: getOrders
---

### Syntax

```javascript
this.getOrders()
```

### Description

The `getOrders` is used to get access to the generated orders


### Returns

An array of objects, where each object represents an order. Each object contains the following properties:

- `symbol`: the ticker symbol of the asset.
- `data`: order date
- `units`: order units
- `action`: order side
- `status`: order status
- `isClose`: is this order closing an open position

### Examples

```javascript
this.buy("AAPL", 2);
this.getOrders();
//=> [{symbol: "AAPL", units: 2, action: "buy", date: '17233333', status: 'created', isClose: false}]
```