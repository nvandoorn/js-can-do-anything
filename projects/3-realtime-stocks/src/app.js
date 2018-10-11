import React, { Component } from 'react'
import { Stock } from './stock'
import { StockDataProvider } from './stock-data'
import './app.css'

export class App extends Component {
  // Make a new instance of our data provider
  provider = new StockDataProvider()
  // Set our initial state (empty array)
  state = { data: [] }
  // When our component "mounts" on the page,
  // we should subscribe to our data
  componentDidMount() {
    this.sub = this.provider.subscribeToStockData(1000, data => {
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
  }
  render() {
    return (
      <main>
        <Stock label="AAPL" data={this.state.data} />
      </main>
    )
  }
}
