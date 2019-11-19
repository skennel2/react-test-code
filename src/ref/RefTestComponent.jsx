import React, { Component } from 'react'

export default class RefTestComponent extends Component {
    constructor() {
        super();
        // createRef로 엘리먼트를 필드에 할당하기
        this.inputRef = React.createRef();
        this.divRef = React.createRef();
    }

    onClickButton(e) {
        console.log(e)
        //TODO: current의 의미는 무엇일까?
        this.inputRef.current.focus();
    }
    
    onFocusDiv() {
        console.log('div에 포커스');
    }

    render() {
        return (
            <>
                <div>
                    <button onClick={this.onClickButton.bind(this)}>인풋에 포커스 주기</button>
                    <input ref={this.inputRef} type={"text"} />
                </div>
                <div 
                    tabIndex={100} // 탭인덱스를 주면 div에도 포커스를 줄수 있고 onFocus이벤트도 사용할 수 있다. TODO: 왜?
                    onFocus={this.onFocusDiv.bind(this)}>
                    aaa
                </div>
            </>
        )
    }
}
