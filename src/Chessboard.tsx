import { useState } from "react";
import { Pawn } from "./Figures/Pawn";
import { Pawns } from "./Figures/Pawns";
import { Square } from "./Square";
import { ChessboardGrid } from "./Styles/Chessboard.styled";

export const Chessboard = () => {
   
    const sizeOfChessboard = 8;

    const squares = [];
    const pawns = [];
    for (let i = 0; i < sizeOfChessboard; i++) {
        for (let j = 0; j < sizeOfChessboard; j++) {
            if ((i + j) % 2 === 0) {
                squares.push(<Square isOccupied={false} isWhite={true} id={"square"+i+j}/>);
            } else {
                squares.push(<Square isOccupied={true} isWhite={false} id={"square"+i+j} />);
                
        }
    }

    for (let i = 0; i < sizeOfChessboard+1; i++) {
        if (pawns.length === 0) {
            pawns.push(<Pawn id={"pawn"+i} position={[50,50]} isWhite={i <= sizeOfChessboard ? false : true}/>);
    }}

    }
    const [chessBoard, setChessBoard]=useState<HTMLElement | null>(null);
    const handleClick = () => {
        setChessBoard(document.getElementById("chessBoard"));
        if (chessBoard) {
            console.log(chessBoard.getBoundingClientRect())
        }
      
    }
    return (
        <>
         <button onClick={handleClick}/>
         
        <ChessboardGrid id="chessBoard">
        {pawns} 
            {squares}
        </ChessboardGrid>
        
         </>
    );

    
}