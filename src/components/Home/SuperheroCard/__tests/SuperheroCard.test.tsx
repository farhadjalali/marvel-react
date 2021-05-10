import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import SuperheroCard from '../SuperheroCard'
import {Provider} from "react-redux";
import {configureStore} from '../../../../store';
import {Character} from "../../../../types";
import {BrowserRouter as Router} from "react-router-dom";

const store = configureStore();

const character = {
    id: 1,
    name: "Superhero#1",
    thumbnail: {
        path: "picture",
        extension: "jpg"
    },
    comics: {
        available: 12
    }
} as Character

beforeEach(() => {
    render(
        <Router>
            <Provider store={store}>
                <SuperheroCard character={character}/>
            </Provider>
        </Router>
    )
})

test('Check superhero title is rendered successfully!', () => {
    const titleElement = screen.getByText(/Superhero#1/i)
    expect(titleElement).toBeInTheDocument()
})
