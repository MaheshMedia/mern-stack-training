import React, { useState } from "react";
//css imports
import "./App.css";

import r1 from "./images/r1.jpg";
import r2 from "./images/r2.jpg";
import r3 from "./images/r3.jpg";

//components
import DisplayImage from "./components/DisplayImage";
import DisplayText from "./components/DisplayText";
import CustomBtn from "./components/CustomBtn";

function App() {
  //state to change btn display

  // Exercise 1
  const [state, setState] = useState(true);
  // function to handle button click
  const handleBtnClick = (e) => {
    setState(prev => !prev);
    alert("clicked");
  };

  // Exercise 5
  // const handleBtnClick = e => {
  //   alert(e.target.innerHTML);
// };  }

  //Exercise 6
  const [checkVal, setCheckVal] = useState(null);

  let handleCheckVal = e => {
    // console.log(e.target.checked);
    setCheckVal(e.target.checked);
  };

  return (
    <div className="App">
      <button type="submit" onClick={handleBtnClick}>
        Change component
      </button> 

      {/* Exercise 1 & 2  */}

       {state ? <DisplayImage image={r1} /> : <DisplayText />}

      <DisplayImage image={r2} />
      <DisplayImage image={r3} />

      {/* Exercise 5 */}

      <CustomBtn handleBtnClick={handleBtnClick} title="button 1" />
      <CustomBtn handleBtnClick={handleBtnClick} title="button 2" />
      <CustomBtn handleBtnClick={handleBtnClick} title="button 3" /> 

      {/* Exercise 6  */}
      <label htmlFor="val">CheckBox</label>
      <input type="checkbox" name="val" id="val" onChange={handleCheckVal} />
    </div>
  );
}

export default App;
