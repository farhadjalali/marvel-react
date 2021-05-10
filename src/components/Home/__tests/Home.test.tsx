import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import Home from '../Home'
import {Provider} from "react-redux";
import {configureStore} from '../../../store';

const store = configureStore();

beforeEach(() => {
    render(
        <Provider store={store}>
            <Home />
        </Provider>
    )
})

// test('Test rendering "Load more" button', () => {
//     const buttonElement = screen.getByText(/Load More/i)
//     expect(buttonElement).toBeInTheDocument()
// })
