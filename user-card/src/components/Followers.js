import React from 'react'





function Followers (props) {

    return (

        <div className="them">
        <img src={props.pic} />
        <h2>{props.name}</h2>
        </div>

    )
}


export default Followers