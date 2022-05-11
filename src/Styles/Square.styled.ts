import styled from "@emotion/styled"


export const SquareStyle = styled.div<{
    isWhite :boolean
  
  }>`
  width: 100px;
    height: 100px;
    background-color: ${({isWhite}) => isWhite ? '#fff' : '#000'};
    border: 1px solid #ccc;
    text-align:center;
    display: table-cell;
    vertical-align: bottom;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    color: ${({isWhite}) => isWhite ?  '#000' :'#fff'};

`

export const Circle = styled.div<{
    isWhite :boolean

    }>`
    height: 10px;
    width: 10px;
    background-color: ${({isWhite}) => isWhite ? '#fff' : '#000'};
    border-radius: 50%;
    display: relative;
    z-index: 222;
    border: 1px solid #ccc;
    `  