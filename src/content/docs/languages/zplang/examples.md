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

;; define a function to calculate CMR for 21 days
;; for a specific symbol
;; you can use it like (cmr21 "AAPL") will give you [AAPL, x.xxx]
(defn cmr21 [symbol] [symbol, (cmr 21 symbol)])

;; calculates CMR21 for all stocks
(def mAll (map cmr21 stocks))

;; sort descendend by CMR
(def second (fn [val] (* -1 (nth 1 val))))
(def stocksSorted (sortBy second mAll))

;; buy TOP topX
(loop item in (take topX stocksSorted)
  (def symbol (nth 0 item))
  (def amount (* (getCash) weight))
  (buyAmount {symbol} amount true)
)
```
