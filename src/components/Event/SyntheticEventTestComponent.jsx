import React, { Component } from 'react'

const style = {
    border: "solid",
    padding: "10px"
}

/**
 * https://ko.reactjs.org/docs/events.html
 * https://blueshw.github.io/2018/04/23/event-bubbling-capturing/
 * TODO: 이벤트 캡쳐링, 버블링의 개념
 * 
 * 특정 DOM노트에서 발생한 이벤트가 자기자신에서 부모로 전파되면 버블링이라고 한다.
 * 반대로 부모에서 자기 자신으로 전파되면 캡쳐링이라고 한다.
 * 
 * 이벤트가 발생하면 우선 window에서 target node까지 이벤트 캡쳐링을 한다.
 * 그 다음 타겟 노트에 이벤트가 발생한 뒤 이벤트를 한단계씩 상위로 버블링한다.
 */
export default class SyntheticEventTestComponent extends Component {

    onClickParent = (e) => {
        alert('onClick Parent')
    }

    onClickChild = (e) => {
        alert('onClick Child')
    }

    render() {
        return (
            <>
                부모에 onClickCapture 자식에 onClick
                <div style={style} onClickCapture={this.onClickParent}>
                    <div style={style} onClick={this.onClickChild}></div>
                </div>

                부모, 자식에 onClick
                <div style={style} onClick={this.onClickParent}>
                    <div style={style} onClick={this.onClickChild}></div>
                </div>

                부모에 onClick 자식에 onClickCapture
                <div style={style} onClick={this.onClickParent}>
                    <div style={style} onClickCapture={this.onClickChild}></div>
                </div>

                부모, 자식에 onClickCapture
                <div style={style} onClickCapture={this.onClickParent}>
                    <div style={style} onClickCapture={this.onClickChild}></div>
                </div>
            </>
        )
    }
}
