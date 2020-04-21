import React, { Component } from 'react'

export const TestContext = React.createContext(
    {
        value: "test",
        from: 'from default'
    }
);

export default class ContextProvider extends Component {
    state = {
        value: 'ContextProvider test'
    }

    render() {
        return (
            <TestContext.Provider value={{
                from: 'ContextProvider',
                value: this.state.value
            }} >
                <ContextChildProvider />
                <hr />
                <ContextConsumer />
                
                <button onClick={
                    () => {
                        this.setState({
                            value: this.state.value + "!"
                        })
                    }
                }>
                    ContextProvider state변경
                </button>
            </TestContext.Provider>
        )
    }
}

class ContextChildProvider extends Component {
    state = {
        value: 'ContextChildProvider test'
    }

    render() {
        return (
            <TestContext.Provider value={{
                from: 'ContextChildProvider',
                value: this.state.value
            }} >
                <ContextConsumer />
                
                <button onClick={
                    () => {
                        this.setState({
                            value: this.state.value + "!"
                        })
                    }
                }>
                    ContextChildProvider state변경
                </button>
            </TestContext.Provider>
        )
    }
}

function ContextConsumer() {
    return (
        <TestContext.Consumer >
            {
                value => (
                    <div>
                        <div>from: {value.from}</div>
                        <div>value: {value.value}</div>
                    </div>
                )
            }
        </TestContext.Consumer>
    )

}
