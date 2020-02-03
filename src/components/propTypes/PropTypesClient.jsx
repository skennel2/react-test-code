import React, { Component } from 'react'

/**
 * PropTypes 사용을 위해서는 다음 패키지가 필요하다.
 */
import PropTypes from 'prop-types'

export default class PropTypesTestClient extends Component {
    render() {
        return (
            <HasPropTypesComponent />
        )
    }
}

export class HasPropTypesComponent extends Component {
    static propTypes = {
        showValue: PropTypes.bool,
        value: PropTypes.string
    };

    static defaultProps = {
        showValue: true,
        value: 'Hello!!'
    };

    render() {
        return (
            <div>
                {this.props.showValue === true ? this.props.value : "NoValue"}
            </div>
        )
    }
}

// 아래 방식은 defaultProps가 외부에서 사용될때 작동하지 않는 문제가 있다.
// 아래 방식으로 propTypes와 defaultProps설정을 바꾼 뒤 PropTypes 스토리의 동작을 살펴볼 것
// HasPropTypesComponent.propTypes = {
//     showValue: PropTypes.bool,
//     value: PropTypes.string
// };

// HasPropTypesComponent.defaultProps = {
//     showValue: true,
//     value: 'Hello!!'
// };

