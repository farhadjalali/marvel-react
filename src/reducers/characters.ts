import {handleActions} from 'redux-actions';
import {RootState} from "./state";
import {CharacterActions} from "../actions";

const initialState: RootState.CharactersState = {
    heroes: {
        items: [],
        loading: false,
        hasMore: false
    },
    hero: {
        comics: [],
        comicsLoading: false,
        loading: false
    }
}

const charactersReducer = handleActions<RootState.CharactersState, any>({
    [CharacterActions.Type.GET_HEROES_REQUEST]: (state) => {
        return {
            ...state,
            heroes: {
                loading: true,
                hasMore: false,
                items: state.heroes.items // To present the already previously loaded heroes
            }
        }
    },

    [CharacterActions.Type.GET_HERO_REQUEST]: (state) => {
        return {
            ...state,
            hero: {loading: true, comicsLoading: false, comics: []},
        }
    },

    [CharacterActions.Type.GET_HERO_COMICS_REQUEST]: (state) => {
        return {
            ...state,
            hero: {
                ...state.hero,
                comicsLoading: true
            }
        }
    },
}, initialState)

export default charactersReducer
