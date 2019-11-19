import React, { Component } from 'react'
import NumberPrinter from './RenderProps/NumberPrinterWithPrefix'
import RefTestComponent from './ref/RefTestComponent'
import SyntheticEventTestComponent from './Event/SyntheticEventTestComponent'
import ChangePropsProblem from './etc/ChangePropsProblem'

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
        <div>
          <SyntheticEventTestComponent></SyntheticEventTestComponent>
        </div>
        <div>
          <ChangePropsProblem data={{value: 'passed by props'}} />
        </div>
      </>
    )
  }
}
