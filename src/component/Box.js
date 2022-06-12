import React from 'react'

function Box(props) {
  let result;
  if(props.title=="Computer" && props.result != "TIE" && props.result != "") {
    result = props.result == "WIN"? "LOSE" : "WIN";
  } else {
    result = props.result;
  }
  console.log("props", props);
  return (
    <div className={`box ${result}`}>
        <h1>{props.title}</h1>
        <img  
            className="img-style" 
            src={props.item && props.item.img}
        />
        <h2>{result}</h2>
    </div>
  )
}

export default Box;