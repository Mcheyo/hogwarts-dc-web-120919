import React, { Component } from 'react';

export default class SortByWeight extends Component {



    render(){

        console.log('Sort by weight: ',this.props)
        return (
            <div><button className="ui red button" onClick={()=> this.props.weightClickHandler()}>Sort by weight </button></div>
        )
    }

}


