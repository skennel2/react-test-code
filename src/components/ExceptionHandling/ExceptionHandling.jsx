import React, { Component } from 'react'

export default class ExceptionHandling extends Component {
    state = {
        error: false
    }

    componentDidCatch(error, info) {
        this.setState(
            {
                error: true
            }
        )
    }

    render() {
        if(this.state.error) {
            return(<div>error 발생</div>)
        }

        return (
            <div>
                <Child />
            </div>
        )
    }
}

class Child extends Component {
    render(){
        return(
            <div>
                <ChildOfChild />
            </div>
        );
    }
}

class ChildOfChild extends Component {
    occurError(){
        throw new Error('occurError');
    }

    render(){
        this.occurError();
        return(
            <div>
                Child of Child
            </div>
        );
    }
}
