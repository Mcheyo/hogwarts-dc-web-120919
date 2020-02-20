import React, { Component } from 'react'
import Hog from './Hog.js'
export default class HogContainer extends Component { 
    
    render(){ 
        return (
            <div className="ui grid container">{(this.props.hogList.map ((hogObj) => <Hog HogInfo={hogObj} key={hogObj.name}/> ))}</div>
            
        )
    }
    
}