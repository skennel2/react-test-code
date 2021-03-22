import React, { Component } from 'react'

export default class LifeCycleClient extends Component {
    state = {
        data: 1,
        data2: 2,
    }

    handleClickButton = () => {
        this.setState({
            data: this.state.data + 1
        })
    }

    handleClickButton2 = () => {
        this.setState({
            data2: this.state.data2 + 1
        })
    }

    render() {
        return (
            <>
                <div style={{ padding: '10px', margin: '10px', border: '1px solid black' }}>
                    <h2>부모</h2>
                    <div>
                        <button onClick={this.handleClickButton}>자식에 영향있는 state 변경</button>
                        <button onClick={this.handleClickButton2}>자식에 영향없는 state 변경</button>
                    </div>
                    <div>
                        <div>
                            data2: {this.state.data2}
                        </div>
                    </div>
                </div>

                {/* 현재 컴포넌트에서 setState가 일어나면 실제 영향이 없는 것이라도 무조건 렌더링과정이 진행된다. */}
                <LifeCycleTestComponent data={this.state.data} />
            </>
        )
    }
}

export class LifeCycleTestComponent extends Component {
    constructor(props) {
        super(props);

        alert('constructor');
    }

    state = {
        data: 1
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
     * render 호출 이후에 호출 
     * 여기선 this.props 와 this.state의 값이 변경되어있다.
     * props나 state가 변경되어 다시 렌더링될때 render함수 이후 호출된다.
     * @param {} prevProps 
     * @param {*} prevState 
     * @param {*} snapshot 
     */
    componentDidUpdate(prevProps, prevState, snapshot) {
        alert('componentDidUpdate');
    }

    handleClickButton = () => {
        this.setState({
            data: this.state.data + 1
        })
    }

    render() {
        alert('render');

        return (
            <div style={{ padding: '10px', margin: '10px', border: '1px solid black' }}>
                <h2>자식</h2>
                <div>
                    <button onClick={this.handleClickButton}>자식의 state 바꾸기</button>
                </div>
                <div>
                    props로 전달받은 값 data {this.props.data}
                </div>
            </div>
        )
    }
}