export const generateValue = () => {
  // randomly generate either 1 or -1
  const plusOrMinus = Math.round(Math.random()) ? 1 : -1
  // start at 1 and add [-0.5, 0.5]
  return 1 + plusOrMinus * Math.random() * 0.5
}
export const generateStartingPoints = (n, pollPeriod) => {
  // For some reason JS doesn't have a proper range
  // function, so we have to make a new Array full of
  // "empty items" (wtf js?). This means we have to
  // fill the array before we can use functional operators/loops
  // on it. JS is weird.
  return new Array(n).fill(1).map((k, i) => {
    return {
      value: generateValue(),
      // first entries should be oldest,
      // so take (n - i) as the scaling
      // factor on pollPeriod
      datetime: Date.now() - (n - i) * pollPeriod
    }
  })
}
const N_STARTING_POINTS = 50

// Note that the current implementation of this class
// could be static or not a class at all.
// Generally, data providers receive some type of dependency injection
// through the constructor, so I left it like this.
export class StockDataProvider {
  constructor(secretApiKey) {
    // Note used, for dependency injection demo only
    this.secretApiKey = secretApiKey
  }
  subscribeToStockData(pollFrequency, callback) {
    // generate 50 random points
    let points = generateStartingPoints(N_STARTING_POINTS, pollFrequency)
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
