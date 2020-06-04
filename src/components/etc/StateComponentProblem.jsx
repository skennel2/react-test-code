import React, { Component } from 'react'

export default class StateComponentProblem extends Component {
    state = {
        value: 'zzz',
        component: null

    }

    getComponent() {
        return (
            <TestComponent
                value={this.state.value}
                onChange={(e) => {
                    this.setState({
                        value: e
                    })
                }
                }
            />
        );
    }

    render() {
        return (
            <div>
                <button onClick={(e) => {
                    this.setState({
                        component: this.getComponent()
                    })
                }}>
                    컴포넌트 변경
                </button>

                <hr></hr>

                {this.state.component}

                <hr></hr>

                <TestComponent
                    value={this.state.value}
                    onChange={(e) => {
                        this.setState({
                            value: e
                        })
                    }
                    }
                />
            </div>
        )
    }
}

class TestComponent extends Component {

    render() {
        return (
            <>
                <div>
                    <button onClick={(e) => {
                        this.props.onChange(this.props.value + '!')
                    }}>
                        onChange
                </button>
                </div>
                {this.props.value}
            </>
        )
    }
}
