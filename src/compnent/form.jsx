import React, { Component } from 'react';

import axios from "axios"
 

class Form  extends Component {
  state = {
    query: "",
  
  }
  handlechange =  e => {
    this.setState({ query:e.target.value });
      } 
  
      handlesubmit = async (e)=>{
    e.preventDefault();
    
    
  
    const result = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=${this.state.query}`,
      { crossdomain: true },
      { responseType: "json" },
      { responseEncoding: "utf8" }
    );
    console.log(result)
    this.props.dataCallback(result.data[0],result.data[1],result.data[2],result.data[3])    
  }
  
  
  render() { 
    return ( 
      <form action="">
  <input type="text" name="search" value={this.state.query } onChange={this.handlechange} placeholder='Search Wikipedia Articles' />
  <button type='submit' onClick={this.handlesubmit}>Search</button>
</form>
      );
  }
}
 
export default  Form ;