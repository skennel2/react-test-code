import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class PureComponentContainer extends Component {
    state = {
        value: 'Hello',
        stringValue: 'Hello'
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

    /**
     * SomePureComponent는 렌더링 되지 않는다. 
     * 새로운 string을 생성해서 할당해도 얕은비교가 성립하는듯하다.
     */
    onClickChangeStringValue = (e) => {
        this.setState({
            stringValue: new String(this.state.stringValue)
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickChangeContainerValue}>
                    컨테이너 렌더링에만 영향있는 state 변경
                </button>

                <button onClick={this.onClickChangeStringValue}>
                    string state 변경
                </button>

                <div>
                    {this.state.value}
                    <SomePureComponent
                        stringValue={this.state.childValue} />
                    <SomeNormalComponent 
                        stringValue={this.state.childValue} />
                </div>
            </div>
        )
    }
}

class SomePureComponent extends React.PureComponent {
    render() {
        console.log('SomePureComponent render')
        return (
            <div>
                {this.props.stringValue}
            </div>
        )
    }
}

class SomeNormalComponent extends React.Component {
    render() {
        console.log('SomeComponent render')
        return (
            <div>
                {this.props.stringValue}
            </div>
        )
    }
}
