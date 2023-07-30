import { useState } from "react";
import ChessBox from "./ChessBox";
import { CHANGE_POSITION } from "../../redux/Types/Types";
import { useDispatch, useSelector } from "react-redux";

const Chess = () => {
  const position = useSelector((state) => state.ChessReducer.position);
  const dispatch = useDispatch();
  const handlePosition = (index) => {
    console.log(position, index);
    dispatch({
      type: CHANGE_POSITION,
      payload: index,
    });
  };
  return (
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
        <div key={i}><ChessBox ind={i} value={box} handlePosition={handlePosition} /></div>
      ))}
    </div>
  );
};

export default Chess;
