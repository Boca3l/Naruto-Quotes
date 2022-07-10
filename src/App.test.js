import {render,screen} from '@testing-library/react';
import {App} from './App';

TextDecoderStream('renders the app', () => {
    render (<App/>);

    const text = screen.getByText(/Quote/i);

    expected(text).toBeInTheDocument();

});