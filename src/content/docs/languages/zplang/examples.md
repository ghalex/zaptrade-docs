---
title: Examples
description: Here you can see some examples of automations written in zplang
---

### First automation

Buy one share of AAPL, no logic. This is the simplest automation you can build. Every time you run this it will generate one order => _buy one share of AAPL_

```clojure
(def symbol "AAPL")
(buy {symbol} 1)

;;=> {symbol: "AAPL", units: 1, side: "long", ...}
```

### Some logic

This automation has some logic.  Calculates Simple Moving Average for the last 21 days and buys using all cash only if the asset current price is over SMA21 if not closes all positions

```clojure
(def asset "MSFT")                  ;; define asset
(def sma21 (sma 21 asset))          ;; calculates SMA21
(def closePrice (:close {asset}))   ;; gets asset close price

(if (> closePrice sma21)
  (buyAmount {asset} (getCash ))     ;; yes => Buy one share
  (closePositions )                  ;; no => Close all open positions
)
```

### Multiple assets

This automation sorts a list of assets by CMR (_cumulative total return_) and picks top 2 to invest.

```clojure
(def topX 2)
(def weight (/ 1 topX))
(def stocks [
  "MSFT",
  "ADBE",
  "ADSK",
  "CRM",
  "AAPL"
])

(def stocksSorted (sortBy [s] => (cmr 21 s) stocks))

;; buy TOP topX
(loop symbol in (take topX stocksSorted)
  (def amount (* (getCash) weight))
  (buyAmount {symbol} amount true)
)
```
