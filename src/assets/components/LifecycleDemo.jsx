import { Component } from "react";

let renderCount = 0;

export default class LifecycleDemo extends Component {
    constructor(props) {
        super(props)

        this.state = {clicks: 0}
        this.state = this.handleClick.bind(this);

        console.log("LifecycleDemo - Constructer" , "font-weight:bold")
        console.log("LifecycleDemo - initial Props" , props)
        console.log("LIfecycleDemo - Initial states", this.state);

    }

    handleClick() {
        console.log("LifecycleDemo - handleClick > SetState(+1)")
        this.setState((s) => ({clicks: s.clicks + 1}));
    }

    static getDerivedStateFromProps(nextProp, prevState) {
        console.log("LifeCycleDemo - getDerivedStateFromProps with hook")
        return null 
    }

    componentDidMount() {
        console.log("LifeCycleDemo - The component did Mount")
        console.log("LifeCycleDemo - DOM is ready, good place to fetch/timers/subscriptions")

    }

    shouldComponentUpdate(nextPros, nextState) {
        const should = true;
        console.log("LifeCycleDemo - Should Component Update", { nextProps, nextState, should})
        return should;

    }

    getSnapshotBeforeUpdate(prevProps, preState) {
        console.log("LifeCycle - getSnapshotBeforeUpdate")
        return null;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.clicks !== this.state.clicks) {
            console.log (`LifeCycleDemo clicks: ${prevState.clicks} - ${this.state.clicks}`)
        }
        if (prevProps.title !== this.props.title) {
            console.log (`LifeCycleDemo title: "${prevProps.title}" - "${this.props.title}`)

        }
    }

    componentWillUnmount() {
        console.log("LifeCycleDemo componentWillUnmount")
    }

    render() {
        renderCount += 1;
        console.log(`LIfecycleDemo render #${renderCount}`)
        console.log("LIfecycleDemo current state in render", this.state);
        console.log("LifeCycleDemo current props in render", this.props);

        return(
            <div style={{padding: "1rem", border: "1px solid #333", borderRadius: 8}}>
               <h3>{this.props.title}</h3>
               <p>Clicks: {this.state.clicks}</p>
               <button onClick={this.handleClick}>Increment</button>
            </div>       
        )
    }
}