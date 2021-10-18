import "./styling.css";
import React, { useState } from "react";

/*
*/
function Spiel({ value }) {
  const [beispielobjekt, setBeispielobjekt] = useState([
    0, 1, 2, 1, 1, 2, 1, 2, 1, 0, 1, 2, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2,
    0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 2,
  ]);
  return (
    <div className="dev_box">
      {beispielobjekt.map((item, index) => (
        <div className="dev_kaechen" key={index}>
          {item == 1 && <div className="dev_weiss" />}
          {item == 0 && <div className="dev_schwarz"></div>}
          {item == 2 && (
            <div
              className="dev_leer"
              onClick={() => {
                //value.advance(index);
              }}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Spiel;
