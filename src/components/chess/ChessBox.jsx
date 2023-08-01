import { useState } from "react";
import { useSelector } from "react-redux";
import Pawn from "../../icons/Pawn.png";
import Draggable from "react-draggable";

const ChessBox = ({
  ind,
  handlePosition,
  handlePawnPosition,
  position
}) => {

  return (
    <div
      key={ind}
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        cursor: "pointer",

        backgroundColor:
          ((ind % 8) + parseInt(ind / 8)) % 2 == 0 ? "#dd9060" : "#c96634",
        color: "white",
      }}
    >
      {position === ind ? (
        <Draggable
          // bounds={{ top: -80, left: -80, right: 80, bottom: 80 }}
          grid={[81, 81]}
          // bounds={{ top:-81, bottom : 81, left: -81, right:81}}
          onDrag={handlePawnPosition}
          
          onStart={()=>{
            console.log('start');
          }}
          onMouseDown={()=>{
            console.log('mouseDown');
          }}
          onStop={() => {
            handlePosition(ind);
            console.log('stop ',ind);
          }}
        >
          <img bounds="parent" src={Pawn} />
        </Draggable>
      ) : (
        ""
      )}
    </div>
  );
};

export default ChessBox;
