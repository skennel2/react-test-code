import React, { Component } from 'react'

/**
 * PropTypes 사용을 위해서는 다음 패키지가 필요하다.
 */
import PropTypes from 'prop-types'
import HasPropTypesComponentOtherFile from './HasPropTypesComponentOtherFile';

export default class PropTypesTestClient extends Component {
    render() {
        return (
            <>
                HasPropTypesComponent : <HasPropTypesComponent />
                HasPropTypesComponentOtherFile : <HasPropTypesComponentOtherFile />
            </>
        )
    }
}

export class HasPropTypesComponent extends Component {
    render() {
        return (
            <div>
                {this.props.showValue === true ? this.props.value : "NoValue"}
            </div>
        )
    }
}

// 아래 방식은 제대로 동작하지 않는다. 내부에 static 방식으로 바꾸면 정상 동작함
HasPropTypesComponent.propTypes = {
    showValue: PropTypes.bool,
    value: PropTypes.string
};

HasPropTypesComponent.defaultProps = {
    showValue: true,
    value: 'Hello!!'
};

