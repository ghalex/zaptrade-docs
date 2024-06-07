---
title: Simple Moving Averange
sidebar:
    label: sma
---

### Syntax

```javascript
this.sma(len, symbol, options?)
this.sma(len, data, options?)
```

### Description

The `sma` function calculates the Simple Moving Average (SMA) for a given symbol over a specified period. The function can also be applied directly to an array of numerical data to calculate the SMA. The SMA is a widely used technical indicator that smooths out price data by creating a constantly updated average price.


### Returns

The sma function returns a single SMA value by default. If the rolling option is specified, it returns an array of SMA values for the specified rolling period.

### Parameters

- `len`: The length of the period over which to calculate the SMA.
- `symbol`: The symbol for which to calculate the SMA.
- `options`? (optional): An object with the following optional properties:
    - `rolling`: The number of days for which to return the SMA values. If specified, an array of SMA values is returned.
    - `offset`: The number of days ago to start the calculation. Default is 0 (current day).
    - `prop`: The property of the data to use for calculation. Default is `'close'`. This option is only applicable when using with symbol.

### Examples

Using symbol and length

```javascript
// Calculate the 21-day SMA for AAPL
this.sma(21, "AAPL")
//=> 150.5 (example value)

// Calculate the 21-day SMA for AAPL, 5 days ago
this.sma(21, "AAPL", {offset: 5})
//=> 148.3 (example value)

// Calculate the 21-day SMA for AAPL with a rolling period of 3 days
this.sma(21, "AAPL", {rolling: 3})
//=> [149.5, 150.0, 150.5] (example values)
```

Using Data:

```javascript
// Calculate the SMA for an array of numbers with default options
this.sma(5, [1, 2, 3, 4, 5])
//=> 3.0 (example value)

// Calculate the SMA for an array of numbers with a rolling period of 2
this.sma(5, [1, 2, 3, 4, 5, 6, 7, 8], {rolling: 2})
//=> [2.5, 3.5] (example values)
```

### Notes

- The sma function is a fundamental tool in technical analysis, providing insight into market trends by smoothing out price fluctuations.
- When using the rolling option, the returned array of SMA values can help in analyzing recent price movements and detecting short-term trends.
- The offset option is useful for backtesting strategies and analyzing historical data by calculating the SMA from a specific point in time.