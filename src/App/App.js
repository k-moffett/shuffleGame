import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import { Square1, Square2, Square3 } from './components/index'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalScore: 0,
    }
    this.clickedTwice = this.clickedTwice.bind(this)
    this.scoreUp = this.scoreUp.bind(this)
  }

  clickedTwice() {
    this.setState({
      totalScore: 0
    })
  }

  scoreUp() {
    let newScore = this.state.totalScore + 1
    this.setState({
      totalScore: newScore
    })
  }

  render() {
    return (
      <Container className="App">
        <h1> Player Score: {this.state.totalScore} </h1>
        <Square1 clickedTwice={this.clickedTwice} scoreUp={this.scoreUp} />
        <Square2 clickedTwice={this.clickedTwice} scoreUp={this.scoreUp} />
        <Square3 clickedTwice={this.clickedTwice} scoreUp={this.scoreUp} />
      </Container>
    );
  }
}

export default App;
