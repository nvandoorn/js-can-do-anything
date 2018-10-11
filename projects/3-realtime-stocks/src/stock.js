import React from 'react'
import { Line as LineChart, defaults } from 'react-chartjs-2'

const CHART_BACKGROUND_COLOR = '#34989F'
const CHART_POINT_COLOR = '#ffffff'

// TODO globals are super janky,
// no idea where the non global one is
defaults.global.defaultFontColor = '#ffffff'

// configuration object for chart.js
// time series plot
export const charJsConfig = {
  responsive: true,
  scales: {
    xAxes: [
      {
        type: 'time',
        ticks: {
          maxTicksLimit: 4,
          autoSkip: true
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
}

// Take our data and transform it
// the format required by chart.js.
// We also mix in some color options
export function normalizeData(data, label) {
  return {
    datasets: [
      {
        label,
        data: data.map(k => ({ x: k.datetime, y: k.value })),
        pointBackgroundColor: CHART_POINT_COLOR,
        backgroundColor: CHART_BACKGROUND_COLOR
      }
    ]
  }
}

// This is a pure component as it contains no state,
// so instead of using a class, we simply return the JSX
// we need. State is managed by this components parent,
// and then passed down as props
export function Stock(props) {
  const normalizedData = normalizeData(props.data, props.label)
  // don't return a component if we're
  // missing the required data prop
  console.log(props.data)
  return props.data ? (
    <section>
      <LineChart data={normalizedData} options={charJsConfig} />
    </section>
  ) : null
}
