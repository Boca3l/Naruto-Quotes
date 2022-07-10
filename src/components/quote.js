import React from "react";
import styled from 'styled-components';

export const Quote = ({quote,speaker}) => {
    return(
        <div>
            <Frase>{quote}</Frase>
            <Speaker>- {speaker}</Speaker>
        </div>
    );
    
};

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Frase = styled.p`
    font-size: 2em;
    margin: 0;
`;
const Speaker = styled(Frase) `
    text=align: right;
    margin-bottom: 50px;

`;
