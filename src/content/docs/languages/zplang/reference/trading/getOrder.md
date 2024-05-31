---
title: Get Order
sidebar:
  label: getOrder
---

### Syntax

```clojure
(getOrder symbol)
```

### Description

The `getOrder` is used to get a specific order. 


### Returns

The `getOrder` function returns one order with a specific `symbol` or `null`.

### Parameters

- `symbol`: symbol to filter the orders

### Examples

```clojure
(buy {MSFT} 1)
(getOrder "MSFT")
;;=> [{symbol: "MSFT", units: 1, action: "buy", date: '17233333', status: 'created', isClose: false}]

(getOrder "TSLA")
;;=> null
```