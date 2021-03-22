import React, { Component } from 'react'

export default class ChildrenTestComponent extends Component {
    render() {
        return (
            <div>
                <HasChildren>
                    <Children value={'Hello'} />
                    <Children value={'World'} />
                </HasChildren>

                
                <Children value={'Hello'}>
                    {/* 특별한 에러없이 렌더링되지 않는다. */}
                    <Children value={'world'} />
                </Children>
            </div>
        )
    }
}

class HasChildren extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

class Children extends Component {
    render() {
        return (
            <div>
                {this.props.value}
            </div>
        )
    }
}
