---
title: Highest
sidebar:
    label: highest
---

### Syntax

```javascript
this.highest(len, symbol, options?)
this.highest(len, data, options?)
```

### Description

The `highest` function calculates the highest value over a specified period for a given symbol or array of numerical data. It identifies the maximum value within the specified length of time. By default, it uses the closing price, but you can specify a different property using the `prop` option.

### Returns

The `highest` function returns a single highest value by default. If the `rolling` option is specified, it returns an array of highest values for the specified rolling period.

### Parameters

- `len`: The length of the period over which to calculate the highest value.
- `symbol` or `data`: Either the symbol for which to calculate the highest value or an array of numerical data.
- `options?` (optional): An object with the following optional properties:
  - `rolling`: The number of days for which to return the highest values. If specified, an array of highest values is returned.
  - `offset`: The number of days ago to start the calculation. Default is 0 (current day).
  - `prop`: The property of the data to use for calculation. Default is `'close'`. This option is only applicable when using with symbol.

### Examples

#### Using with Symbol and Length

```javascript
// Calculate the highest closing price for AAPL over the last 30 days
this.highest(30, "AAPL")
//=> 155.2 (example value)

// Calculate the highest high price for AAPL over the last 30 days
this.highest(30, "AAPL", { prop: 'high' })
//=> 158.7 (example value)
```

#### Using with Data Array

```javascript
// Calculate the highest value for an array of numbers with a length of 5 (data is the last 5 days)
this.highest(5, [150, 152, 155, 154, 158])
//=> 158 (example value)
```

### Use Cases

**Identifying Peaks in Price Data:**
```javascript
// Calculate the highest closing price for AAPL over the last 30 days
const highestPrice = this.highest(30, "AAPL")

// Use the highest closing price value in a trading strategy
if (this.asset("AAPL").close < highestPrice) {
    this.buy("AAPL", 10)
} else {
    this.sell("AAPL", 10)
}
```

**Setting Stop Loss Levels Based on High Price:**
```javascript
// Calculate the highest high price for GOOGL over the last 20 days
const highestHighPrice20Days = this.highest(20, "GOOGL", { prop: 'high' })

// Use the highest high price value to set stop loss levels
if (this.asset("GOOGL").close < highestHighPrice20Days * 0.95) {
    this.sell("GOOGL", 5)
} else {
    console.log("Hold position")
}
```

### Notes
- The `highest` function is commonly used in technical analysis to identify peaks in price data and set stop loss levels.
- By specifying a different property, such as high price, traders can analyze different aspects of price movements and make informed trading decisions.
- Traders often use the highest value in conjunction with other indicators to manage risk effectively and optimize trading strategies.
