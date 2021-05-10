import * as actions from '../marvel'
import {CharacterActions} from "../marvel";
import fetchMock from 'fetch-mock'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import {GetCharactersOptions} from "../../types";

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
    afterEach(() => {
        fetchMock.restore()
    })

    it('should create an action to get the heroes', () => {
        fetchMock.getOnce('/', {
            body: {data: {offset: 0}},
            headers: {'content-type': 'application/json'}
        })

        const expectedActions = [
            {type: CharacterActions.Type.GET_HEROES_REQUEST},
            {type: CharacterActions.Type.GET_HEROES_FAILED, payload: {}}
        ]

        const store = mockStore({data: {offset: 0}})
        return store.dispatch(actions.CharacterActions.getHeroes({} as GetCharactersOptions) as any).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
});
