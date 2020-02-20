import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer.js'
class App extends Component {
  constructor(){ 
    super()
    this.state = { 
      hogwarts: hogs 
    }
  }

  HogGrabber = () => { 

  }
  render() {
    return (
      <div className="App">
          < Nav />
          <HogContainer hogList={this.state.hogwarts} />
          

      </div>
    )
  }
}

export default App;
