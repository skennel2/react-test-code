import React, { Component } from 'react'

export default class RefsetStateCallback extends Component {
    state = {
        toggle: true
    }

    ref = React.createRef();

    renderComponent = () => {
        if (this.state.toggle) {
            return (
                <div>
                    no ref
                </div>
            )
        } else {
            return (
                <div ref={this.ref}>
                    with ref
                </div>
            )
        }
    }

    render() {
        return (
            <>
                <button onClick={() => {
                    this.setState({
                        toggle: !this.state.toggle
                    }, () => {
                        if(this.ref.current) {
                            alert('current')
                        }
                    })
                }}>
                    toggle
                </button>
                {this.renderComponent()}
            </>
        )
    }
}

