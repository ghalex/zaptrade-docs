---
title: Asset
sidebar:
  label: asset
---

### Syntax

```javascript
this.asset(symbol)
```

### Description

The `asset` function returns the current bar for a specific symbol.

### Returns

The `asset` function returns a OHLC bar

### Examples

```javascript
this.asset("AAPL");
//=> {open: 100, high: 103, low: 99, close: 102}
```