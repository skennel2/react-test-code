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

    onClickParent(e) {
        alert('onClick Parent')
    }

    onClickChild(e) {
        alert('onClick Child')
    }

    render() {
        return (
            <>
                부모에 onClickCapture
                <div style={style} onClickCapture={this.onClickParent.bind(this)}>
                    <div style={style} onClick={this.onClickChild.bind(this)}></div>
                </div>
                
                모두 onClick
                <div style={style} onClick={this.onClickParent.bind(this)}>
                    <div style={style} onClick={this.onClickChild.bind(this)}></div>
                </div>

                지식에 onClickCapture
                <div style={style} onClick={this.onClickParent.bind(this)}>
                    <div style={style} onClickCapture={this.onClickChild.bind(this)}></div>
                </div>

                모두 onClickCapture
                <div style={style} onClickCapture={this.onClickParent.bind(this)}>
                    <div style={style} onClickCapture={this.onClickChild.bind(this)}></div>
                </div>                
            </>
        )
    }
}
