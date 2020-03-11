import React from "react";

function Me (props) {
  return (
    <div className='mine'>
         <img src={props.data.avatar_url} />
         <h2>{props.data.login}</h2>
    </div>
    
  );
}

export default Me;
