import styled from "@emotion/styled"


export const PawnStyle = styled.div<{
    isWhite :boolean
    top: number
    left: number

  }>`
    width: 30px;
    height: 30px;
    background-color: red;
    border: 1px solid #ccc;
    position: absolute;
    top: ${({top}) => top}px;
    left: ${({left}) => left}px;
    font-size: 4rem;
    color: ${({isWhite}) => isWhite ?  '#000' :'#fff'};
    z-index: 546;

`