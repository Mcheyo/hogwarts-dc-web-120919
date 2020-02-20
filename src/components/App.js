import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer.js'
import Filter from './Filter.js';
import SortByWeight from './SortByWeight';

class App extends Component {
  constructor(){ 
    super()
    this.state = { 
      hogwarts: hogs,
      sortWeight: false,
    }
  }

  HogGrabber = () => { 

    let allHogs = hogs; // needed to keep a copy of all hogs such that it never gets changed 
    let newArray = allHogs.filter(pig => pig.greased === true);
    (this.state.hogwarts.length === allHogs.length)? this.setState({hogwarts: newArray}) : this.setState({hogwarts: allHogs}); 
  }

  weightSorter = () => {
    console.log('sorting by weight...')
    let weightToggle = this.state.sortWeight;
    console.log('Weight toggle', weightToggle)
    
  }

  render() {
    return (
      <div className="App">
          < Nav />
          <SortByWeight sortedToggle={this.state.sortWeight} weightClickHandler={this.weightSorter}/>
          < Filter filteredState={this.state.hogwarts} greasedFilter={this.HogGrabber}/>
          <HogContainer hogList={this.state.hogwarts} />
          

      </div>
    )
  }
}

export default App;
