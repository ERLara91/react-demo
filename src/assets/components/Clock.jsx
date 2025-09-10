import { Component } from "react";

export default class Clock extand Component {
    Constructor(props) {
        super(props);
        this.state = { now: new Date() }
        console.log("Clock - construtor")
    }

    componentDidMount() {
        console.log("Clock - componentDidMount")
        this.timer = setInterval(() => {
            console.log("Clock tick - steState(now)")
            this.setState({ now: new Date() })
        }, 1000);
    }

    componentDidUpdate() {
        console.log("Clock - componentDidUpdate")
    }

    componentWillUnmount() {
        console.log("Clock - componentWillUnmount")
        clearInterval(this.timer);
    }

    render() {
        console.log("Clock - render")
        return <p>Time: {this.state.now.toLocaleTimeString()}</p>;
    }
}