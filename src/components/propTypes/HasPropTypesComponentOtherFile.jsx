import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class HasPropTypesComponentOtherFile extends Component {
    render() {
        return (
            <div>
                {this.props.showValue === true ? this.props.value : "NoValue"}
            </div>
        )
    }
}

HasPropTypesComponentOtherFile.propTypes = {
    showValue: PropTypes.bool,
    value: PropTypes.string
};

HasPropTypesComponentOtherFile.defaultProps = {
    showValue: true,
    value: 'Hello!!'
};