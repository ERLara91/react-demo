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
}