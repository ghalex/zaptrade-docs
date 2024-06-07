---
title: Get Total Capital
sidebar:
  label: getTotalCapital
---

### Syntax

```javascript
this.getTotalCapital()
```

### Description

The `getTotalCapital` function returns the total capital available in automaion.

It is calculated:

```cash + invested + unrealizedPl```

### Returns

The `getTotalCapital` function returns a number reprezenting total capital

### Examples

```javascript
this.getTotalCapital();
//=> 10_321
```