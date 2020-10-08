import React, { Children, Component } from 'react'

export default class ChildrenTestComponent extends Component {
    render() {
        return (
            <div>
                <HasChildren>
                    <Children value={'Hello'}/>
                    <Children value={'World'}/>
                </HasChildren>
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
