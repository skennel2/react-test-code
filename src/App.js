import React, { Component } from 'react'
import NumberPrinter from './RenderProps/NumberPrinterWithPrefix'

export default class App extends Component {
  render() {
    return (
      <div>
        <NumberPrinter prefix='카운트:'></NumberPrinter>
      </div>
    )
  }
}
