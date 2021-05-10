import {handleActions} from 'redux-actions';
import {RootState} from "./state";
import {CharacterActions} from "../actions";
import {Character, Comic} from "../types/global";

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
    // Get Heroes
    [CharacterActions.Type.GET_HEROES_SUCCESS]: (state, action) => {
        return {
            ...state,
            heroes: {loading: false, items: action.payload as Character[], hasMore: true}
        }
    },

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

    [CharacterActions.Type.GET_HEROES_FAILED]: (state) => {
        return {
            ...state,
            heroes: {loading: false, items: [], hasMore: true}
        }
    },

    // Get Hero
    [CharacterActions.Type.GET_HERO_REQUEST]: (state) => {
        return {
            ...state,
            hero: {loading: true, comicsLoading: false, comics: []},
        }
    },

    [CharacterActions.Type.GET_HERO_SUCCESS]: (state, action) => {
        return {
            ...state,
            hero: {loading: false, current: action.payload as Character, comicsLoading: false, comics: []}
        }
    },

    [CharacterActions.Type.GET_HERO_FAILED]: (state) => {
        return {
            ...state,
            hero: {loading: false, comicsLoading: false, comics: []}
        }
    },

    // Get Hero's Comics
    [CharacterActions.Type.GET_HERO_COMICS_REQUEST]: (state) => {
        return {
            ...state,
            hero: {
                ...state.hero,
                comicsLoading: true
            }
        }
    },

    [CharacterActions.Type.GET_HERO_COMICS_SUCCESS]: (state, action) => {
        return {
            ...state,
            hero: {
                ...state.hero,
                comicsLoading: false,
                comics: action.payload as Comic[]
            }
        }
    },

    [CharacterActions.Type.GET_HERO_COMICS_FAILED]: (state) => {
        return {
            ...state,
            hero: {
                ...state.hero,
                comicsLoading: false,
                comics: []
            }
        }
    }
}, initialState)

export default charactersReducer
