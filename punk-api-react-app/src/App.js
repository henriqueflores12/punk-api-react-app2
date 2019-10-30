import { Component } from "react";
import React from "react";
import logo from "./images.jpg";
import "./App.css";
import Counter from "./counter";
import ThumbsDown from "./thumbsDown";
import Comments from"./comments";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
  }
  click = () => {
    fetch("https://api.punkapi.com/v2/beers")
    .then(res => res.json())
    .then(data => {
      console.log("***my first fetch data***", data)
      this.setState({beers: data})
    })
  }
  like = (beer) => {
    console.log("***beer that i love***",beer)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <button onClick = {this.click}>click here to see all beers</button>
        {this.state.beers.map(beer =>{
          return (
            <div key={beer.id}>
              <p className="description">{beer.description}</p>
              <img src={beer.image_url} className="App-logo" alt="logo" />
              <Counter/>
              <ThumbsDown/>
              <Comments/>
            </div>
            
          )
        })}
        
        </header>
      </div>
    );
  }
}

export default App;
