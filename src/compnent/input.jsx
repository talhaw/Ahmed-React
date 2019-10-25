import React, { Component } from "react";

class Table extends Component {
  
  generateTableRows = ()=>{
    let arr = []
    //console.log(this.state.result)
  
  
    for(let i=0;i<this.props.value;i++){
      arr.push(<tr>
        <td>{this.props.related[i]}</td>
        <td>{this.props.description[i]}</td>
        <td>{this.props.url[i]}</td>
      </tr>)
    }
    //console.log(this.props.related);
    
  
    return arr;
  }
  render() { 
    //console.log(this.props);
    
    return (<table className="table">
    <thead>
      <tr>
        
        <th scope="col">related words</th>
        <th scope="col">description</th>
        <th scope="col">url</th>
      </tr>
    </thead>
    <tbody>
      {this.generateTableRows()}
    </tbody>
  </table>  );
  }
}
 
export default Table;
