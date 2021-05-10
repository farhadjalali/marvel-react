import {handleActions} from 'redux-actions';
import {RootState} from "../store/state";
import {CharacterActions} from "../actions";
import {Character, Comic} from "../types";

const initialState: RootState.CharactersState = {
    heroes: {
        items: [],
        loading: false,
        hasMore: false,
        count: 0,
        offset: 0,
        searchName: ""
    },
    hero: {
        comics: [],
        comicsLoading: false,
        loading: false
    }
}

const charactersReducer = handleActions<RootState.CharactersState, unknown>({
    /**
     * Get Heroes success response
     */
    [CharacterActions.Type.GET_HEROES_SUCCESS]: (state, action) => {
        const {results, count, offset, total} = action.payload as { results: [], count: number, offset: number, total: number }

        let items: Character[];
        if (offset > 0) // after load more
            items = [...state.heroes.items, ...results]
        else
            items = results

        return {
            ...state,
            heroes: {
                ...state.heroes,
                loading: false,
                items: items,
                count: count,
                offset: offset,
                hasMore: Boolean(total > offset + count)
            }
        }
    },

    /**
     * Get Heroes
     */
    [CharacterActions.Type.GET_HEROES_REQUEST]: (state) => {
        return {
            ...state,
            heroes: {
                ...state.heroes,
                loading: true
            }
        }
    },

    /**
     * Get Heroes failed
     */
    [CharacterActions.Type.GET_HEROES_FAILED]: (state) => {
        return {
            ...state,
            heroes: {
                ...state.heroes,
                loading: false
            }
        }
    },

    /**
     * Get hero by id
     */
    [CharacterActions.Type.GET_HERO_REQUEST]: (state) => {
        return {
            ...state,
            hero: {
                loading: true,
                comicsLoading: false,
                comics: []
            },
        }
    },

    /**
     * Get hero by returned successful
     */
    [CharacterActions.Type.GET_HERO_SUCCESS]: (state, action) => {
        return {
            ...state,
            hero: {
                loading: false,
                current: action.payload as Character,
                comicsLoading: false,
                comics: []
            }
        }
    },

    /**
     * Get hero by id failed
     */
    [CharacterActions.Type.GET_HERO_FAILED]: (state) => {
        return {
            ...state,
            hero: {
                loading: false,
                comicsLoading: false,
                comics: []
            }
        }
    },

    /**
     * Get Hero's Comics
     */
    [CharacterActions.Type.GET_HERO_COMICS_REQUEST]: (state) => {
        return {
            ...state,
            hero: {
                ...state.hero,
                comics: [],
                comicsLoading: true
            }
        }
    },

    /**
     * Get Hero's Comics returned successfully
     */
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

    /**
     * Get Hero's Comics failed
     */
    [CharacterActions.Type.GET_HERO_COMICS_FAILED]: (state) => {
        return {
            ...state,
            hero: {
                ...state.hero,
                comicsLoading: false,
                comics: []
            }
        }
    },

    /**
     * Set search name
     */
    [CharacterActions.Type.SET_SEARCH_NAME]: (state, action) => {
        return {
            ...state,
            heroes: {
                ...state.heroes,
                searchName: action.payload as string
            }
        }
    },

}, initialState)

export default charactersReducer
