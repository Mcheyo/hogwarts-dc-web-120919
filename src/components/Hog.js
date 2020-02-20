import React, { Component } from 'react'

export default class Hog extends Component{ 
    constructor(){ 
        super()
        this.state = { 
            visibility: "hidden"
        }
    }

    showInfoCard = () =>{ 
        this.state.visibility === "hidden"? this.setState({visibility :  "visible"} ) : this.setState({visibility :  "hidden"})
    }
    render(){ 
        let medal = this.props.HogInfo["highest medal achieved"]
        let {HogInfo: {name, specialty, greased, weight}} = this.props
        console.log(greased)
        let imgSource = name.replace(/ /g,"_").toLowerCase()
        return(
            
            <div className="ui eight wide column"> 
            {console.log(imgSource)}
                <div className="ui card" onClick={this.showInfoCard}>
               <h3>{name}</h3>
               <img src={require(`../hog-imgs/${imgSource}.jpg`)}/>
               <div style={ {visibility: this.state.visibility} }>
               <p>specialty: {specialty}</p>
               <p>Highest Medal Acheived: {medal}</p>
                 {greased? <p>Greased!</p>: null}
                 <p>Weight: {weight}kg</p>
               </div>
               
               
                </div> 
                
                
                
                
                </div>
        )
    }
}
