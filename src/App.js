// import React from 'react';
import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Slider from "./compnent/slider"
import Table from "./compnent/input"
import axios from "axios"

import './App.css';

import Form from './compnent/form';
class Wiki extends Component {


    state = {
        query: "",

        result: [],
        related: [],
        description: [],
        url: [],
        value: 10
    }


    change = (e) => {
        this.setState({value: e.target.value})
    }

    getValuesCallback = (result, related, description, url) => {
        console.log(result, related, description, url)
        this.setState({related,description,url})
        // do something with value in parent component, like save to state
    }

    render() { // console.log(this.state.related,this.state.description,this.state.url)
        return (
            <React.Fragment>
                <div className="App">
                    <h1>Wikipedia Search Engine</h1>
                    <Form result={
                            this.state.result
                        }
                        related={
                            this.state.related
                        }
                        description={
                            this.state.description
                        }
                        url
                        ={this.state.url}
                        dataCallback={
                            this.getValuesCallback
                        }/>

                    <input type="range"
                        min={2}
                        max={10}
                        value={
                            this.state.value
                        }
                        className="slider"
                        onChange={
                            this.change
                        }/>
                    <div className="value">
                        {
                        this.state.value
                    }</div>
                    <Table related={
                            this.state.related
                        }
                        description={
                            this.state.description
                        }
                        url
                        ={this.state.url}
                        value={
                            this.state.value
                        }/>


                </div>
            </React.Fragment>
        )
    }
}

export default Wiki;
