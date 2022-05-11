import { useState } from "react";
import { SquareStyle } from "./Styles/Square.styled";

type Props = {
  isWhite: boolean;
  isOccupied: boolean;
  id: string;
};
export const Square = ({ isWhite, isOccupied, id }: Props) => {
  var pointerX = -1;
  var pointerY = -1;
  document.ondragover = function (evt) {
    evt = evt || window.event;
    var x = evt.pageX,
      y = evt.pageY;

    console.log(x, y);
  };

  const handleDaco = () => {
    document.onmousemove = function (event) {
      pointerX = event.pageX;
      pointerY = event.pageY;
      console.log("started at", pointerX, pointerY);
    };
  };
  const handleDruhe = () => {
    document.onmousemove = function (event) {
      pointerX = event.pageX;
      pointerY = event.pageY;
      console.log("ended at", pointerX, pointerY);
    };
  };
  return (
    <SquareStyle isWhite={isWhite} id={id}>
      {isWhite ? "♟" : "♙"}
    </SquareStyle>
  );
};
