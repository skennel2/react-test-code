import React, { Component } from 'react'

export default class ChangePropsProblem extends Component {
    state = {
        renderToggler: false
    }

    handleClick() {
        // props의 값은 readonly라 직접적인 변경은 불가능하다.
        // this.props.data = {
        //     value: 'changed by handler'
        // };

        this.props.data.value = 'changed by handler';
        this.setState({
            renderToggler: !this.state.renderToggler
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}>props 변경</button>
                {this.props.data.value}
            </div>
        )
    }
}
