import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import Index from '../Home'
import {Provider} from "react-redux";
import {configureStore} from '../../../store';

const store = configureStore();

beforeEach(() => {
    render(
        <Provider store={store}>
            <Index/>
        </Provider>
    )
})

test('Test rendering "Load more" button', () => {
    const buttonElement = screen.getByText(/Load More/i)
    expect(buttonElement).toBeInTheDocument()
})
//
// test('Test hero search', () => {
//     const inputElement = screen.getByTestId("search-input")
//     fireEvent.change(inputElement, {target: {value: "/black"}})
//
//     const messageElement = screen.getByText(/Please enter a valid url/i)
//     expect(messageElement).toBeInTheDocument()
// })
