import React, { Component } from 'react'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            loading: true
        }

        window.addEventListener('load', () => {
            this.setState({
                loading: false
            })
        });        
    }

    componentDidMount() {
        // alert('mount')
        // this.setState({
        //     loading: false
        // })


    }

    componentWillUnmount() {

    }

    

    componentDidUpdate() {
        //alert('App componentDidUpdate')
    }

    render() {
        //return this.state.loading ? "로딩" : <Child />;
        return (
            <div>
                <button onClick={()=>{ alert('click button') }}>클릭</button>
                {this.state.loading ? "로딩" : <Child />}
            </div>
        )
        
        // return (
        //     <div>
        //         App 영역
        //         <React.Suspense fallback={(<div>loading</div>)}>
        //             <div>
        //                 <Child />
        //             </div>
        //         </React.Suspense>
        //         {/* <ChildLoading /> */}
        //     </div>
        // )
    }
}

class Child extends Component {
    state = {
        items: []
    }

    componentDidMount() {
        // alert('Child componentDidMount')
        // let items = [];
        // for (let index = 0; index < 20000; index++) {
        //     items.push((<div style={{ visibility: "hidden" }}>Hello</div>))
        // }

        // this.setState({
        //     items: items
        // }, () => {
        //     // this.props.onEndRender();
        // })

    }

    componentDidUpdate() {
        //  alert('Child componentDidUpdate');
        // this.props.onEndRender();
    }

    handleLoad = () => {
        //alert('handleLoad')
    }

    getItem = () => {
        let items = [];
        for (let index = 0; index < 100000; index++) {
            items.push((<div key={index}>Hello</div>))
        }

        return items;
    }

    render() {
        //alert('Child render');
        return (
            <div>
                {/* <React.Suspense fallback={(<div>loading</div>)}> */}
                    {this.getItem()}
                {/* </React.Suspense> */}
                {/* <button onClick={() => {
                    let items = [];
                    for (let index = 0; index < 20000; index++) {
                        items.push((<div style={{ visibility: "hidden" }}>Hello</div>))
                    }
                    this.setState({
                        items: items
                    })
                }}>
                    아이템 넣기
                </button>
                <button onClick={() => {
                    this.setState({
                        items: []
                    })
                }} >
                    아이템 초기화
                </button>
                <div>
                    {this.state.items}
                </div> */}
            </div>
        )
    }
}

const withRenderLoading = (WrappedComponent) => {


    return class extends Component {
        state = {
            loading: true
        }

        loadingRef = React.createRef();

        // componentDidUpdate() {
        //     if (this.loadingRef.current) {
        //         this.loadingRef.current.hide();
        //     }
        // }

        // handleStartRender = () => {
        //     if (this.loadingRef.current) {
        //         this.loadingRef.current.show();
        //     }
        // }

        handleEndRender = () => {
            if (this.state.loading === true) {
                this.setState({
                    loading: false
                })
            }
        }

        render() {
            return (
                <>
                    {/* <Loading ref={this.loadingRef} /> */}
                    {this.state.loading === true ? "로딩" : null}
                    <WrappedComponent {...this.props} onEndRender={this.handleEndRender} />
                </>
            );
        }
    }
}

class Loading extends Component {
    state = {
        show: false
    }

    render() {
        return (
            <>로딩</>
        )
    }
}

const ChildLoading = withRenderLoading(Child)