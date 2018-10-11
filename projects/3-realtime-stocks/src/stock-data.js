export const generateValue = () => {
  const plusOrMinus = Math.round(Math.random()) ? 1 : -1
  return 1 + plusOrMinus * Math.random() * 0.5
}
export const generateStartingPoints = (n, pollPeriod) => {
  return new Array(n).fill(1).map((k, i) => {
    return {
      value: generateValue(),
      datetime: Date.now() - (n - i) * 1000
    }
  })
}
const N_STARTING_POINTS = 50

export class StockDataProvider {
  constructor() {}
  subscribeToStockData(pollFrequency, callback) {
    // generate 100 random points
    // 15 minutes apart
    let points = generateStartingPoints(N_STARTING_POINTS)
    const pushCallback = () => {
      points.push({ value: generateValue(), datetime: Date.now() })
      points.shift()
      callback(points)
    }
    pushCallback()
    const interval = setInterval(pushCallback, pollFrequency)
    // give the caller a way to cancel
    // the subscription
    return {
      unsubscribe() {
        clearInterval(interval)
      }
    }
  }
}
