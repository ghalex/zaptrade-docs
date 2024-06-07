---
title: Get Positions
sidebar:
  label: getPositions
---

### Syntax

```javascript
this.getPositions()
```

### Description


The `getPositions` function retrieves a list of all currently open positions in the trading portfolio. This function is useful for monitoring the current holdings and their status, which can then be used for making informed trading decisions, such as rebalancing the portfolio or applying stop-loss conditions.

### Returns

An array of objects, where each object represents an open position. Each object contains the following properties:

- `symbol`: the ticker symbol of the asset.
- `openDate`: position open date
- `openPrice`: position open price
- `closeDate`: position close date
- `closePrice`: position close price
- `units`: position units
- `side`: position side
- `stats`
  - `pl`: position current pl
  - `plPct`: position pl in percentage
  - `duration`: open duration in hours

### Examples

```javascript
// Retrieve open positions
const openPositions = this.getPositions();

// Loop through each position and print its details
openPositions.forEach(position => {
  console.log(`Symbol: ${position.symbol}`);
  console.log(`Units: ${position.units}`);
  console.log(`Price: ${position.price}`);
  console.log(`P/L: ${position.pl}`);
});
```