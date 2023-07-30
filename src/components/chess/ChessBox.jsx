import Brightness1Icon from "@mui/icons-material/Brightness1";
import { useState } from "react";
import { useSelector } from "react-redux";
import Pawn from '../../icons/Pawn.png'

const ChessBox = ({ ind, value, handlePosition }) => {
  const position = useSelector((state) => state.ChessReducer.position);
  const pos = ind;
  return (
    <div
      key={ind}
      style={{
        height: "100%",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor:
          ((pos % 8) + parseInt(pos / 8)) % 2 == 0 ? "#dd9060" : "#c96634",
        color: "white",
      }}
      onClick={() => {
          console.log(ind);
        handlePosition(pos);
      }}
    >
      {position===pos ? <img src={Pawn} /> : ""}
    </div>
  );
};

export default ChessBox;
