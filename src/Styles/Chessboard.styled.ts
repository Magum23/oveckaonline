import styled from "@emotion/styled"


export const ChessboardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
    grid-gap: 1px;
    border: 1px solid #ccc;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    z-index: 1;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);


`