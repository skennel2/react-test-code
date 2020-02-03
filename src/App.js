import React, { Component } from 'react'
import NumberPrinter from './components/RenderProps/NumberPrinterWithPrefix'
import RefTestComponent from './components/ref/RefTestComponent'
import SyntheticEventTestComponent from './components/Event/SyntheticEventTestComponent'
import ChangePropsProblem from './components/etc/ChangePropsProblem'
import LifeCycleClient from './components/LifeCycle/LifeCycleClient'
import ExceptionHandling from './components/ExceptionHandling/ExceptionHandling'
import RefAsPropTestComponent from './components/ref_as_prop/RefAsPropTestComponent'

export default class App extends Component {
  render() {
    return (
      <div></div>
    )
  }
}
