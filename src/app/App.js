import React, { useEffect, useState, useRef } from "react";
import styled from 'styled-components';
import {NarutoIMG, Quotes} from '../components';
import {getQuote} from '../services';
import jutsoSound from '../sounds/jutso.mp3';

const audio  = new Audio(jutsoSound);

export default function App() {
    let isMounted = useRef(true);
    console.log(isMounted);

    const [quoteState,setQuoteState] = useState({
        quote: 'loading quote...',
        speaker: 'loading speaker...'
    });
    
    const onUpdate = async () => {
        const quote = await getQuote();

        if(isMounted.current){
            audio.play();
            setQuoteState(quote);
        }
    };

    useEffect(() => {
        onUpdate();

        return () => {
            isMounted.current=false;
        };
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
