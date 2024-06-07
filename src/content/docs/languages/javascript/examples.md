---
title: Examples
description: Here you can see some examples of automations written with Javascript
---

### First automation

Buy one share of AAPL, no logic. This is the simplest automation you can build. Every time you run this it will generate one order => _buy one share of AAPL_


```javascript
this.buy("AAPL", 1);

//=> {symbol: "AAPL", units: 1, side: "long", ...}
```

### Some logic

This automation has some logic.  Calculates Simple Moving Average for the last 21 days and buys using all cash only if the asset current price is over SMA21 if not closes all positions

```javascript
const asset = "MSFT";                  // define asset
const sma21 = this.sma(21, asset);     // calculates SMA21
const closePrice = this.asset(asset).close;   // gets asset close price

if (closePrice > sma21) {
  this.buyAmount(asset, this.getCash());     // yes => Buy one share
} else {
  this.closePositions();                  // no => Close all open positions
}
```

### Multiple assets

This automation sorts a list of assets by CMR (_cumulative total return_) and picks top 2 to invest.

```javascript
const topX = 2;
const weight = 1 / topX;
const stocks = [
  "MSFT",
  "ADBE",
  "ADSK",
  "CRM",
  "AAPL"
];

const stocksSorted = stocks.sort((a, b) => {
  return this.cmr(21, b) - this.cmr(21, a);
});

// buy TOP topX
for (let i = 0; i < topX; i++) {
  const symbol = stocksSorted[i];
  const amount = this.getCash() * weight;
  this.buyAmount(symbol, amount, true);
}
```
