import React from "react"

const element = <h1>Hello World</h1>;

export default class Teste extends React.Component {
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <div className="container">
                <button onClick={this.handleClick}>{this.state.isToggleOn ? 'on' : 'off'}</button>
            </div>
        )
    }
}