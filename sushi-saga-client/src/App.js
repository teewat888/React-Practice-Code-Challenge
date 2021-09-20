import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";
const numberSushiAppear = 4;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sushis: [],
      startIdx: 0,
      endIdx: 4,
      eatenSushis: [],
      balance: 100,
      enoughMoney: true,
    };
  }

  componentDidMount() {
    fetch(API)
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          sushis: data,
        });
      })
      .catch((e) => console.log(e));
  }

  loadSushi = () => {
    this.setState((prevState) => ({
      startIdx: prevState.startIdx + numberSushiAppear,
      endIdx: prevState.endIdx + numberSushiAppear,
    }));
  };

  chargeCustomer = (sushi) => {
    this.setState({
      balance: this.state.balance - sushi.price,
    });
  };

  eatenSushi = (sushi) => {
    if (this.state.balance > sushi.price) {
      this.setState(
        {
          enoughMoney: true,
          eatenSushis: [...this.state.eatenSushis, sushi],
        },
        () => {
          console.log(this.state);
        }
      );
      this.chargeCustomer(sushi);
    } else {
      this.setState({
        enoughMoney: false,
      });
    }
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.sushis.slice(
            this.state.startIdx,
            this.state.endIdx
          )}
          loadSushi={this.loadSushi}
          eatenSushi={this.eatenSushi}
          eatenSushis={this.state.eatenSushis}
        />
        <Table
          eatenSushis={this.state.eatenSushis}
          balance={this.state.balance}
          enoughMoney={this.state.enoughMoney}
        />
      </div>
    );
  }
}

export default App;
