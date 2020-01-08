import React, { Component } from 'react'
import NumberPrinter from './RenderProps/NumberPrinterWithPrefix'
import RefTestComponent from './ref/RefTestComponent'
import SyntheticEventTestComponent from './Event/SyntheticEventTestComponent'
import ChangePropsProblem from './etc/ChangePropsProblem'
import LifeCycleClient from './LifeCycle/LifeCycleClient'
import ExceptionHandling from './ExceptionHandling/ExceptionHandling'
import RefAsPropTestComponent from './ref_as_prop/RefAsPropTestComponent'

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
        <div>
          <LifeCycleClient></LifeCycleClient>
        </div>
        <div>
          <ExceptionHandling></ExceptionHandling>
        </div>
        <div>
          <RefAsPropTestComponent />
        </div>
      </>
    )
  }
}
