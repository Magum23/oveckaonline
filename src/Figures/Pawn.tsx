import { PawnStyle } from "../Styles/Pawn.styled";

type Props = {
    position: [number, number];
    isWhite: boolean;
    id: string
}
export const Pawn = ({position, isWhite, id}:Props) => {
    return (
    <PawnStyle isWhite={isWhite} top={position[0]} left={position[1]} id={id}/> 
   )
}