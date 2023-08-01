import ChessBox from "./ChessBox";
import { CHANGE_POSITION } from "../../redux/Types/Types";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Chess = () => {
  const [activeDrags, setActiveDrags] = useState([1,3,5,7,9,11,13,15,17,19,21,23]);
  const [pawnPosition, setPawnPosition] = useState({
    x: 0,
    y: 0,
  });
  const [position, setPosition] = useState(0);
  // useEffect(()=>{

  // }, [])
  const handlePosition = (index) => {
    // console.log(position, index);
    setPosition(index);
  };

  const handlePawnPosition = (e, loc) => {
    // console.log(pawnPosition);
    setPawnPosition({
      x: pawnPosition.x + loc.deltaX,
      y: pawnPosition.y + loc.deltaY,
    });

    // console.log(parseInt(loc.deltaX / 81), parseInt(loc.deltaY / 81));
  };
  return (
    <>
      <div>
        X: {pawnPosition.x} <br />
        Y: {pawnPosition.y} <br />
      </div>
      <div
        style={{
          width: "650px",
          height: "650px",
          display: "grid",
          margin: "auto",
          gridTemplateColumns: "repeat(8, 1fr)",
          gridTemplateRows: "repeat(8, 1fr)",
          border: "2px solid black",
        }}
      >
        {new Array(64).fill(0).map((box, i) => (
          <div key={i}>
            <ChessBox
              ind={i}
              handlePosition={handlePosition}
              handlePawnPosition={handlePawnPosition}
              position={position}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Chess;
