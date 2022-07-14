import React from "react";
import {Button} from "./button";
import {Quote} from "./quote";
import {string} from 'prop-types';

export const Quotes = ({quote,speaker,onUpdate}) => {
    return(
        <div>
            <Quote quote={quote} speaker={speaker} />
            <Button onClick={onUpdate}>Quote No Jutsu</Button>
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
