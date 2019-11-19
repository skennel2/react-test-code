import React, { Component } from 'react'

export default class ChangePropsProblem extends Component {
    state = {
        renderToggler: false
    }

    handleClick() {
        // props 오브젝트 내부의 값이 변경되었다.
        // props의 값이 변경된것은 아니지만 내부의 값이 변경된것이다. 
        // 다시 렌더링 된다면 변경된값이 바인딩 될것이다.
        Object.assign(this.props.data, {
            value: 'changed by handler'
        });

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
