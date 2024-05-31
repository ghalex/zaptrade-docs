---
title: Get Total Capital
sidebar:
  label: getTotalCapital
---

### Syntax

```clojure
(getTotalCapital)
```

### Description

The `getTotalCapital` function returns the total capital available in automaion.

It is calculated:

```cash + invested + unrealizedPl```

### Returns

The `getTotalCapital` function returns a number reprezenting total capital

### Examples

```clojure
(getTotalCapital)
;;=> 10_321
```