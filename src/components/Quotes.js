import React from "react";
import {Button} from "./button";
import {Quote} from "./quote";
import {string} from 'prop-types';

export const Quotes = ({quote,speaker}) => {
    return(
        <div>
            <Quote quote={quote} speaker={speaker} />
            <Button onClick={() => mostraAlerta('Alerta Funciona')}>Quote No Jutsu</Button>
        </div>
    );
}

Quotes.propTypes = {
    quote: string,
  
    speaker: string
};

const mostraAlerta = (props) => {
    window.alert(props)
}
