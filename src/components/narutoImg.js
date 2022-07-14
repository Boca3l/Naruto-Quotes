import React from "react";
import styled from 'styled-components';
import NarutoPng from "../images/naruto.png";


export const NarutoIMG = () => {
    return(
        <NarutoTag src={NarutoPng} alt="Naruto with a kunai"></NarutoTag>
    );
    
}

const NarutoTag = styled.img`
    max-width: 50vw;
    align-self: flex-end;
`;