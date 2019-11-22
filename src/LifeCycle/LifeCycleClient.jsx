import React, { Component } from 'react'

export default class LifeCycleClient extends Component {
    state = {
        data: 1
    }

    handleClickButton() {
        this.setState({
            data: this.state.data + 1
        })
    }

    render() {
        return (
            <>
                <div>
                    <button onClick={this.handleClickButton.bind(this)}>props 바꾸기</button>
                </div>
                <div>
                    <LifeCycleTestComponent data={this.state.data} />
                </div>
            </>
        )
    }
}

export class LifeCycleTestComponent extends Component {
    constructor(props) {
        super(props);

        alert('constructor');
    }

    /**
     * 최초 컴포넌트가 화면에 렌더링된 이후에 호출.
     * dom을 조작하는 처리, ajax데이터 처리
     */
    componentDidMount() {
        alert('componentDidMount');
    }

    /**
     * 새로운 props를 넘겨받아 this.props가 바뀌기전에 호출
     * this.props는 아직 바뀌기 전이다.
     * setState를 하는것이 아닌 바뀐 상태의 state를 리턴하게 만든다. 
     * @param {*} nextProps 
     * @param {*} prevState 
     */
    static getDerivedStateFromProps(nextProps, prevState) {
        alert('getDerivedStateFromProps');
        return null;
    }

    /**
     * 새로운 props를 넘겨받아 this.props가 바뀌기전에 호출
     * 
     */
    shouldComponentUpdate(nextProps, prevState) {
        alert('shouldComponentUpdate');
        return true;
    }

    /**
     * render 호출이후에 호출 
     * 여기선 this.props 와 this.state의 값이 변경되어있다.
     * @param {} prevProps 
     * @param {*} prevState 
     * @param {*} snapshot 
     */
    componentDidUpdate(prevProps, prevState, snapshot) {
        alert('componentDidUpdate');
    }

    render() {
        alert('render');

        return (
            <div>
                props로 전달받은값 {this.props.data}
            </div>
        )
    }
}