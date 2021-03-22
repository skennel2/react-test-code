import React, { Component } from 'react'

/**
 * https://medium.com/wasd/setstate-%ED%8C%8C%ED%97%A4%EC%B9%98%EA%B8%B0-28b207fc81df
 * @link https://stackoverflow.com/questions/33613728/what-happens-when-using-this-setstate-multiple-times-in-react-component
 * 
 * 이벤트 콜백에서 setState를 여러차례 호출하면 렌더링은 일괄처리되어 한번만 일어난다.
 */
export default class SetStateTest extends Component {
    state = {
        numberValue: 0,
        stringValue: ''
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.state)
    }

    render() {
        return (
            <>
                <div>
                    <button onClick={() => {
                        this.setState({
                            numberValue: this.state.numberValue + 1
                        })

                        this.setState({
                            numberValue: this.state.numberValue + 1
                        })
                    }}>
                        setState
                    </button>
                    {this.state.numberValue}
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
                        setState
                    </button>
                    {this.state.stringValue}
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
                        setState
                    </button>
                    {this.state.numberValue}, {this.state.stringValue}
                </div>
            </>
        )
    }
}