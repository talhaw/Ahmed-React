import React, { Component } from 'react';
class Slider extends Component {
    state = { value: 10 }
    handlechange=(e)=> {
        this.setState({value:e.target.value})

    }
    render() { 
        return (<style>
            <input type="range" min={2} max={10} value={this.state.value} className="slider" onChange={this.handlechange} />
            <div className="value">{this.state.value}</div>
        </style>)
    }
}
 
export default Slider;