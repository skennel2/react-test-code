import React, { Component } from 'react'

const style = {
    border: "solid",
    padding: "10px"
}

/**
 * https://ko.reactjs.org/docs/events.html
 * TODO: 이벤트 캡쳐링, 버블링의 개념
 */
export default class SyntheticEventTestComponent extends Component {

    onClickParent() {
        console.log('onClickParent')
    }

    onClickChild(e) {
        console.log('onClickChild')
    }

    render() {
        return (
            <div style={style} onClickCapture={this.onClickParent.bind(this)}>
                <div style={style} onClick={this.onClickChild.bind(this)}></div>
            </div>
        )
    }
}
