import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class RefAsPropTestComponent extends Component {
    myRef = React.createRef();

    printHello() {
        console.log('hello');
    }

    render() {
        return (
            <ChildComponent
                ref={this.myRef}
                myRef={this.myRef}
            />
        )
    }
}

class ChildComponent extends Component {
    printHey() {
        console.log('hey');
    }

    render() {
        // ref는 prop의 형태로 넘겼지만 특별하게 관리되는 prop로 일반적인 형태로 사용할 수 없다.
        // 언제나 undefined가 리턴될 것이다.
        console.log(this.props.ref)

        // TODO: null이 리턴된다. 
        console.log(this.props.myRef)
        return (
            <div>
                Hello
            </div>
        )
    }
}