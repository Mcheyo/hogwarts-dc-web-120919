import React, { Component } from 'react'
import Hog from './Hog.js'
export default class HogContainer extends Component { 

    alphabetizeHogs = (a, b)=>{

        if(a.name < b.name){
            return -1;
        }
        if(a.name > b.name){
            return 1;
        }
        return 0;
    }
    
    render(){ 
        let hogCopy = [].concat(this.props.hogList);
        hogCopy = hogCopy.sort(this.alphabetizeHogs);
        // console.log(hogCopy);

        return (
            <div className="ui grid container">{(hogCopy.map ((hogObj) => <Hog HogInfo={hogObj} key={hogObj.name}/> ))}</div>
            
        )
    }
    
}