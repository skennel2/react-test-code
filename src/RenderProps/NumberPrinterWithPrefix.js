import React, { Component } from 'react'
import NumberCounter from './NumberCounter'

export default class NumberPrinterWithPrefix extends Component {
    renderNumberCounter(state){
        return (
            <div>{this.props.prefix + ' ' + state.cnt}</div>
        )
    }

    render() {
        return (
            <NumberCounter render={this.renderNumberCounter.bind(this)} />
        )
    }
}
