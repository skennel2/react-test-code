import React, { Component } from 'react'

export default class ChildrenTestComponent extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

class HasChildren extends Component {
    render() {
        console.log(this.props.children);
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
                
            </div>
        )
    }
}
