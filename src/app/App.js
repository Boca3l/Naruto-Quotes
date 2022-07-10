import React from "react";
import styled from 'styled-components';
import {NarutoIMG, Quotes} from '../components';


const App = () => {

    return (
        <Content>
            <Quotes quote={"ok"} speaker={"Speaker"}/>
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

export default App;
