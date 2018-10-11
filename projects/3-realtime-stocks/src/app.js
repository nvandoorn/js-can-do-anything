import React, { Component } from 'react'
import { Stock } from './stock'
import { StockDataProvider } from './stock-data'
import './app.css'

// https://stackoverflow.com/questions/1484506/random-color-generator
// thnx internet
const getRandomColor = () => {
  let letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

export class App extends Component {
  // Make a new instance of our data provider.
  // This is an excellent place to "inject" any
  // dependencies required by StockDataProvider
  provider = new StockDataProvider('Super secret API key')
  // Set our initial state (empty array)
  state = { data: [], backgroundColor: '#ffffff' }
  // When our component "mounts" on the page,
  // we should subscribe to our data
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ backgroundColor: getRandomColor() })
    }, 3 * 1000)
    // Store the the object returned from here
    // so we can unsubscribe later
    this.sub = this.provider.subscribeToStockData(3 * 1000, data => {
      // Each time this callback is fired,
      // we modify the state. The rest of the updating
      // is handled by react as a result of our state change
      this.setState({ data })
    })
  }
  // Unsubscribe when the component leaves the page
  componentWillUnmount() {
    if (this.sub) {
      this.sub.unsubscribe()
    }
    if (this.interval) {
      clearInterval(this.interval)
    }
  }
  render() {
    return (
      <main>
        <Stock
          label="AAPL"
          data={this.state.data}
          backgroundColor={this.state.backgroundColor}
        />
      </main>
    )
  }
}
