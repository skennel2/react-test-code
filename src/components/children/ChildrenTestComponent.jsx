import React, { Component } from 'react'

export default class ChildrenTestComponent extends Component {
    state = {
        renderToggler: false,
        staticState: 'test'
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        renderToggler: !this.state.renderToggler
                    })
                }}>
                    렌더링!!
                </button>

                <hr />

                <HasChildren value={this.state.staticState}>
                    <Children value={'Hello'} />
                    <Children value={'World'} />
                </HasChildren>

                <hr />

                {/*  
                    props.children을 렌더링하지 않는 컴포넌트에 강제로 children을 할당하였을 경우
                */}
                <Children value={'Hello'}>
                    {/* 특별한 에러없이 렌더링되지 않는다. */}
                    <Children value={'world'} />
                </Children>
            </div>
        )
    }
}

class HasChildren extends Component {

    componentDidUpdate(prevProps) {
        // 렌더링될때마다 children의 내용은 동일해도 인스턴스는 바뀌는듯하다.
        if (this.props.children !== prevProps.children) {
            console.log('children이 바뀌었다?');
        }
    }

    render() {
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
                {this.props.value}
            </div>
        )
    }
}
