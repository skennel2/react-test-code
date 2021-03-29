import React, { Component } from 'react'

/**
 * https://medium.com/wasd/setstate-%ED%8C%8C%ED%97%A4%EC%B9%98%EA%B8%B0-28b207fc81df
 * @link https://stackoverflow.com/questions/33613728/what-happens-when-using-this-setstate-multiple-times-in-react-component
 * 
 * 이벤트 콜백에서 setState를 여러차례 호출하면 렌더링은 일괄처리되어 한번만 일어난다.
 */

export default class SetStateTest extends Component {

    state = {
        toggleRender: false
    }

    render() {
        return (
            <>
                <button onClick={() => {
                    this.setState({
                        toggleRender: !this.state.toggleRender
                    })
                }}>
                    부모 state 변경
                </button>
                <SetStateChild
                    value={this.state.toggleRender}
                    onChange={() => {
                        this.setState({
                            toggleRender: !this.state.toggleRender
                        })
                    }}
                    onChangeAsync={() => {
                        setTimeout(() => {
                            this.setState({
                                toggleRender: !this.state.toggleRender
                            })
                        })
                    }}
                />
            </>
        )
    }
}

class SetStateChild extends Component {
    state = {
        numberValue: 0,
        stringValue: ''
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.state, this.props)
    }

    render() {
        return (
            <>
                <div>
                    {this.props.value ? 'true' : 'false'}
                </div>
                <div>
                    <button onClick={() => {
                        this.setState({
                            numberValue: this.state.numberValue + 1
                        })

                        this.setState({
                            numberValue: this.state.numberValue + 1
                        })
                    }}>
                        setState 연속 호출 number value
                    </button>
                    <div>
                        {this.state.numberValue}, {this.state.stringValue}
                    </div>
                </div>
                <div>
                    <button onClick={() => {
                        this.setState({
                            stringValue: '1'
                        })

                        this.setState({
                            stringValue: '2'
                        })
                    }}>
                        setState 연속 호출 string value
                    </button>
                    <div>
                        {this.state.numberValue}, {this.state.stringValue}
                    </div>
                </div>
                <div>
                    <button onClick={() => {
                        this.setState({
                            stringValue: '1'
                        })

                        this.setState({
                            numberValue: 11
                        })
                    }}>
                        setState 연속 호출 string value, number value
                    </button>
                    <div>
                        {this.state.numberValue}, {this.state.stringValue}
                    </div>
                </div>

                {/*
                    setState 중간에 props으로 받은 콜백을 호출하고 이 콜백에서는 부모의 setState가 진행된다.
                    이 케이스에서도 componentDidUpdate는 한번만 호출
                */}
                <div>
                    <button onClick={() => {
                        this.setState({
                            stringValue: this.state.stringValue + '1'
                        })

                        this.props.onChange();

                        this.setState({
                            numberValue: this.state.numberValue + 1
                        })
                    }}>
                        이벤트 콜백 중간에 onChange로 부모 state 변경
                    </button>
                    <div>
                        {this.state.numberValue}, {this.state.stringValue}
                    </div>
                </div>

                {/*
                    onChangeAsync에서 비동기로 setState를 호출하고 있다. 
                    이 케이스에서 componentDidUpdate는 두번 호출
                */}
                <div>
                    <button onClick={() => {
                        this.setState({
                            stringValue: this.state.stringValue + '1'
                        })

                        this.props.onChangeAsync();

                        this.setState({
                            numberValue: this.state.numberValue + 1
                        })
                    }}>
                        이벤트 콜백 중간에 onChange로 부모 state 비동기로 변경
                    </button>
                    <div>
                        {this.state.numberValue}, {this.state.stringValue}
                    </div>
                </div>
            </>
        )
    }
}