import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import {NarutoIMG, Quotes} from '../components';
import {getQuote} from '../services';
import jutsoSound from '../sounds/jutso.mp3';

const audio  = new Audio(jutsoSound);

export default function App() {

    const [quoteState,setQuoteState] = useState({
        quote: 'ok',
        speaker: 'Speaker'
    });
    
    const onUpdate = async () => {
        const quote = await getQuote();
        audio.play();
        setQuoteState(quote);
    };

    useEffect(() => {
        onUpdate();
    }, []);

    return (
        <Content>
            <Quotes {...quoteState} onUpdate={onUpdate}/>
            <NarutoIMG/>
        </Content>
    );
};

const Content = styled.div`
    height: 100vh;
    padding: 0 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
