import React from 'react';
// import { render } from 'react-dom';


function Filter (props) {
    return(
        <div><button className="ui green button" onClick={() => props.greasedFilter(props)}>Filter</button></div>
    )
}

export default Filter;