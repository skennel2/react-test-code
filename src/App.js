import React, { Component } from 'react'
import NumberPrinter from './RenderProps/NumberPrinterWithPrefix'
import RefTestComponent from './ref/RefTestComponent'

export default class App extends Component {
  render() {
    return (
      <>
        <div>
          <NumberPrinter prefix='카운트:'></NumberPrinter>
        </div>
        <div>
          <RefTestComponent></RefTestComponent>
        </div>
      </>
    )
  }
}
