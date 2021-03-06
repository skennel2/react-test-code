import React, { Component } from 'react'

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

/**
 * 카운트되는 로직만 담고있으며 렌더링되는 것은 render props로 노출한다.
 */
class NumberCounter extends Component {
    state = {
        cnt: 0
    }

    handleClick(){
        this.setState({
            cnt: this.state.cnt + 1
        });
    }

    render() {
        return (
            <div style={{ height: '100%' }} onClick={this.handleClick.bind(this)}>
                {/* 동적으로 렌더링되는 로직을 props로 노출할 수 있다. */}
                {this.props.render(this.state)}
            </div>
        )
    }
}
