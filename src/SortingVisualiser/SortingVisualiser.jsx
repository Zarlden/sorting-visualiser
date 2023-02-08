import { render } from "@testing-library/react";
import { useState, useEffect } from "react";

const ARRAY_SIZE = 100;

function SortingVisualiser() {
  var [array, setArray] = useState([]);

  useEffect(() => {
    changeArray();
  }, []);

  function changeArray() {
    let tempArray = [];
    for (let i = 0; i < ARRAY_SIZE; i++) {
      tempArray.push(Math.floor(Math.random() * (ARRAY_SIZE - 5) + 5));
    }
    setArray(tempArray);
  }

  return (
    <div id="graph-container">
      {/* <button onClick={changeArray}>das</button> */}
      {array.map((value, idx) => (
        <div
          className="array-bar"
          style={{ height: `${value}px` }}
          key={idx}
        ></div>
      ))}
    </div>
  );
}
export default SortingVisualiser;
