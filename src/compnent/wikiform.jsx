import React, { Component } from 'react';
import Input from "./input"
class Wiki  extends Component {
    state = {  }
    render() { 
        return (
            <Input
        name={name}
        onChange={this.handlechange}
        value={this.state.data[name]}
        label={label}
        type={type}
      />
          );
    }
}
 
export default Wiki
<Input
        name={name}
        onChange={this.handlechange}
        value={this.state.data[name]}
        label={label}
        type={type}
      />t ;