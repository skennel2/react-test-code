import React, { Component } from 'react'

export default class TestClient extends Component {
    state = {
        display: 'block',
        show: true,
    }

    render() {
        return (
            <>
                <button onClick={() => { this.setState({ display: 'block' }) }}>block</button>
                <button onClick={() => { this.setState({ display: 'none' }) }}>none</button>
                <button onClick={() => { this.setState({ show: true }) }}>append</button>
                <button onClick={() => { this.setState({ show: false }) }}>remove</button>
                <div style={{
                    display: this.state.display
                }}>
                    <ChangeDisplayStyle></ChangeDisplayStyle>
                </div>

                <div>
                    {this.state.show ? (<RemoveComponent></RemoveComponent>) : null}
                </div>
            </>
        )
    }
}

/**
 * 부모의 css 스타일에 따라 자식의 display가 바뀔때 자식의 생명주기에 영향이 있는지 테스트
 * 결론: 영향없다.
 */
class ChangeDisplayStyle extends Component {
    componentDidMount() {
        alert('WillChangeDisplay mount')
    }
    componentDidUpdate() {
        alert('WillChangeDisplay update')
    }

    componentWillUnmount() {
        alert('WillChangeDisplay unmount')
    }

    render() {
        return (
            <>
                WillChangeDisplay
            </>
        )
    }
}

/**
 * 부모에서 컴포넌트가 제거될때 생명주기 테스트
 * 결론: 제거될때 unmount, 다시 보여질때 mount
 */
class RemoveComponent extends Component {
    componentDidMount() {
        alert('WillRemoveDom mount')
    }
    componentDidUpdate() {
        alert('WillRemoveDom update')
    }

    componentWillUnmount() {
        alert('WillRemoveDom unmount')
    }

    render() {
        return (
            <>
                WillRemoveDom
            </>
        )
    }
}