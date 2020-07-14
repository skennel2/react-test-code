import React, { Component } from 'react'

export default class CssChangeClient extends Component {
    state = {
        display: 'none'
    }

    render() {
        return (
            <>
                <button onClick={() => { this.setState({ display: 'block' }) }}>block</button>
                <button onClick={() => { this.setState({ display: 'none' }) }}>none</button>
                <div style={{
                    display: this.state.display
                }}>
                    <Test></Test>
                </div>
            </>
        )
    }
}

class Test extends Component {
    componentDidMount() {
        console.log('mount')
    }
    componentDidUpdate() {
        console.log('update')
        alert('12')
    }

    render() {
        return (
            <>
                Test
            </>
        )
    }
}
