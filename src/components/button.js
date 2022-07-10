import React from "react";
import styled from "styled-components";

export const Button = (props) => {
    return(
        <BtnLaranja onClick={props.onClick}> Quote No Jutsu </BtnLaranja> 
    );
    
}

const BtnLaranja = styled.button`
    background-color: orange;
    border: none;
    padding; 50px;
`;