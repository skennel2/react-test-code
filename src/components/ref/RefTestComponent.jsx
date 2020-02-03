import React, { Component } from 'react'

export default class RefTestComponent extends Component {
    constructor() {
        super();
        // createRef로 엘리먼트를 필드에 할당하기
        this.inputRef = React.createRef();
        this.divRef = React.createRef();
    }

    componentDidMount() {
        // current에 각각의 엘리먼트가 할당되어있다.
        console.log(this.inputRef);
        console.log(this.divRef);
    }

    handleClickButtonInput(e) {
        //TODO: current의 의미는 무엇일까?
        this.inputRef.current.focus();
    }

    handleClickButtonButton(e) {
        this.divRef.current.focus();
    }

    handleFocusDiv() {
        console.log('div에 포커스');
    }

    render() {
        return (
            <>
                <section>
                    <button onClick={this.handleClickButtonInput.bind(this)}>인풋에 포커스 주기</button>
                    <div>
                        <input ref={this.inputRef} type={"text"} />
                    </div>
                </section>

                <section>
                    <button onClick={this.handleClickButtonButton.bind(this)}>div에 포커스 주기</button>
                    <div ref={this.divRef}
                        tabIndex={-1} // 탭인덱스를 주면 div에도 포커스를 줄수 있고 onFocus이벤트도 사용할 수 있다. TODO: 왜? tabIndex는 정확히 뭐지
                        onFocus={this.handleFocusDiv.bind(this)}>
                        div의 영역
                    </div>
                </section>
            </>
        )
    }
}
