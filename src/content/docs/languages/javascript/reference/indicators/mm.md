---
title: Momentum 
sidebar:
    label: momentum
---

### Syntax

```javascript
this.mm(len, symbol, options?)
this.mm(len, data, options?)
```

### Description

The `mm` function calculates the momentum of price data over a specified period for a given symbol or array of numerical data.

Momentum measures the rate of change in price over time and helps identify the strength or weakness of a trend. Positive momentum indicates upward price movement, while negative momentum indicates downward price movement.

### Returns

The `mm` function returns a single value representing the momentum of the price data over the specified period. If the `rolling` option is specified, it returns an array of momentum values for the specified rolling period.

### Parameters

- `len`: The length of the period over which to calculate the momentum.
- `symbol` or `data`: Either the symbol for which to calculate the momentum or an array of numerical data.
- `options?` (optional): An object with the following optional properties:
  - `rolling`: The number of data points for which to return the momentum values. If specified, an array of momentum values is returned.
  - `offset`: The number of data points ago to start the calculation. Default is 0 (current data point).

### Examples

#### Using with Symbol and Length

```javascript
// Calculate the 14-day Momentum for AAPL
this.mm(14, "AAPL")
//=> (example value)

// Calculate the 14-day Momentum for AAPL with rolling values for the last 5 days
this.mm(14, "AAPL", { rolling: 5 })
//=> (example value)
```

#### Using with Numerical Data

```javascript
// Calculate the Momentum for an array of numerical data (data is the last 14 days)
this.mm(14, [50, 52, 48, 55, 51, 49, 53, 57, 54, 56, 55, 52, 58, 60])
//=> (example value)
```

### Use Cases

**Identifying Trend Strength:**
```javascript
// Calculate the 14-day Momentum for AAPL
const momentumValue = this.mm(14, "AAPL")

// Use the momentum value to identify the strength of the trend
if (momentumValue > threshold) {
    console.log("Strong upward momentum, consider entering a long position")
} else {
    console.log("Weak or no momentum, consider staying on the sidelines")
}
```

**Buy top 2 stocks by momentum:**
```javascript
const symbols = [
  "MSFT",
  "ADBE",
  "ADSK",
  "CRM",
  "AAPL"
]
const sortedSymbols = symbols.sort((a, b) => this.mm(14, b) - this.mm(14, a))

// Buy TOP topX
for (let i = 0; i < 2; i++) {
  this.buyAmount(sortedSymbols[i], 100)
}

this.balance()
```

### Notes
- Momentum is a key indicator used by traders to assess the strength and direction of price trends.
- Positive momentum suggests bullish price movement, while negative momentum suggests bearish price movement.
- Traders often use momentum in combination with other technical indicators to make informed trading decisions and identify potential entry or exit points.
