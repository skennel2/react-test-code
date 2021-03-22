import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TestClient extends Component {
    state = {
        value: 'Hello',
        stringValue: 'this is string value',
        normarObjectValue: {
            value: '1',
        }
    }

    /**
     * SomePureComponent
     * SomeNormalComponent
     * 두 컴포넌트의 렌더링과는 상관없는 state를 변경시킨다.
     * 
     * SomeNormalComponent만 렌더링 될것 이다.
     */
    onClickChangeContainerValue = (e) => {
        this.setState({
            value: this.state.value + '!'
        })
    }

    onClickChangeStringValue = (e) => {
        // PureComponent 렌더링 O
        // this.setState({
        //     stringValue: new String(this.state.stringValue)
        // });

        // PureComponent 렌더링 X
        this.setState({
            stringValue: this.state.stringValue + '!'
        });
    }

    onClickChangeSameStringValue = (e) => {
        this.setState({
            stringValue: this.state.stringValue
        });
    }

    onClickChangeNormalObject = (e) => {
        // 동일한 오브젝트 할당시
        // PureComponent 렌더링 O
        this.setState({
            normarObjectValue: {
                value: '1'
            }
        });
    }

    onClickChangeSameNormalObject = (e) => {
        this.setState({
            normarObjectValue: this.state.normarObjectValue
        });
    }

    handleCallback = () => {

    }

    render() {
        alert('PureComponentContainer render')
        return (
            <div>
                <button onClick={this.onClickChangeContainerValue}>
                    컨테이너 렌더링에만 영향있는 state 변경
                </button>

                <button onClick={this.onClickChangeStringValue}>
                    string state 변경
                </button>

                <button onClick={this.onClickChangeSameStringValue}>
                    string state 변경 (같은값)
                </button>

                <button onClick={this.onClickChangeNormalObject}>
                    normal object state 변경
                </button>

                <button onClick={this.onClickChangeSameNormalObject}>
                    normal object state 변경 (같은값)
                </button>

                <div>
                    {this.state.value}
                    <SomePureComponent
                        stringValue={this.state.stringValue}
                        normarObjectValue={this.state.normarObjectValue}
                        //callBack={(e) => {}} // 계속 새로운 콜백이 생성되어 무조건 렌더링을 탄다.
                        callBack={this.handleCallback}
                    />
                    <SomeNormalComponent
                        stringValue={this.state.stringValue}
                        normarObjectValue={this.state.normarObjectValue}
                        callBack={(e) => { }}
                    />



                    <div
                        onMouseEnter={() => {
                            alert('enter')
                        }} onMouseLeave={() => {
                            alert('leave')
                        }}
                        onMouseOut={() => {
                            alert('out')
                        }}>
                        <button style={{
                            pointerEvents: 'none'
                        }} disabled={true} onMouseLeave={() => {
                            alert('button leave')
                        }}>dfdf</button>
                    </div>
                </div>
            </div>
        )
    }
}

class SomePureComponent extends React.PureComponent {
    render() {
        alert('SomePureComponent render')
        return (
            <div style={{
                padding: '10px',
                border: '1px solid black'
            }}>
                <h3>PureComponent</h3>
                <div>
                    {this.props.stringValue}
                </div>
                <div>
                    {this.props.normarObjectValue.value}
                </div>
            </div>
        )
    }
}

class SomeNormalComponent extends React.Component {
    render() {
        alert('SomeComponent render')
        return (
            <div style={{
                padding: '10px',
                border: '1px solid black'
            }}>
                <h3>Component</h3>
                <div>
                    {this.props.stringValue}
                </div>
                <div>
                    {this.props.normarObjectValue.value}
                </div>
            </div>
        )
    }
}
