import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis";
const numberSushiAppear = 4;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sushis: [],
      startIdx: 0,
      endIdx: 4
    }
  }
  

  componentDidMount() {
    fetch(API).then(resp => resp.json())
    .then(data => {
      this.setState({
        sushis: data
      });
    }).catch(e => console.log(e));
  }

  loadSushi = () => {
    this.setState(prevState => ({
      startIdx: prevState.startIdx + numberSushiAppear,
      endIdx: prevState.endIdx + numberSushiAppear
    }))
  }


  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis.slice(this.state.startIdx,this.state.endIdx)} loadSushi={this.loadSushi}/>
        <Table />
      </div>
    );
  }
}

export default App;