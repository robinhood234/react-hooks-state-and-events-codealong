import React, {useState} from "react";

function Toggle() {
  const [onoff, setOnoff] = useState(true);

  function handleClick () {
    setOnoff((onoff) => !onoff)
  }

  
  return <button onClick ={handleClick}> {onoff ? "ON":"OFF"}</button>;
}

export default Toggle;
