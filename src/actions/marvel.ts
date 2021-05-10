import {useMemo} from "react";
import {Dispatch, bindActionCreators} from "redux";
import {fetchCharacterById, fetchCharactersList, fetchComicsByCharacter} from "../apis";
import {Character, Comic, GetCharactersOptions} from "../types";
import {RootState} from "../store/state";
// import {createAction} from 'redux-actions';

export namespace CharacterActions {
    export enum Type {
        GET_HEROES_REQUEST = 'GET_HEROES_REQUEST',
        GET_HEROES_SUCCESS = 'GET_HEROES_SUCCESS',
        GET_HEROES_FAILED = 'GET_HEROES_FAILED',

        GET_HERO_REQUEST = 'GET_HERO_REQUEST',
        GET_HERO_SUCCESS = 'GET_HERO_SUCCESS',
        GET_HERO_FAILED = 'GET_HERO_FAILED',

        GET_HERO_COMICS_REQUEST = 'GET_HERO_COMICS_REQUEST',
        GET_HERO_COMICS_SUCCESS = 'GET_HERO_COMICS_SUCCESS',
        GET_HERO_COMICS_FAILED = 'GET_HERO_COMICS_FAILED',

        SET_SEARCH_NAME = 'SET_SEARCH_NAME',
    }

    /**
     * Return heroes based on options
     */
    export const getHeroes = (options: GetCharactersOptions) => async (dispatch: Dispatch, getState: () => RootState) => {
        dispatch({
            type: Type.GET_HEROES_REQUEST,
        });

        try {
            options.search = getState().marvel.heroes.searchName;
            const response = await fetchCharactersList(options);
            const res = await response.json();
            dispatch({
                type: Type.GET_HEROES_SUCCESS,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: Type.GET_HEROES_FAILED,
                payload: err
            });
        }
    }

    /**
     * Return heroes next page
     */
    export const getMoreHeroes = () => (dispatch: Dispatch, getState: () => RootState) => {
        const state = getState();
        return getHeroes({offset: state.marvel.heroes.items.length})(dispatch, getState);
    }

    /**
     * Return characters with names that begin with the specified string (e.g. Sp).
     */
    export const getHeroesByNameStart = (searchName: string) => async (dispatch: Dispatch, getState: () => RootState) => {
        dispatch({
            type: Type.SET_SEARCH_NAME,
            payload: searchName
        })

        return getHeroes({})(dispatch, getState);
    }

    /**
     * ASYNC : Return hero by id from API
     */
    export const getHeroById = (heroId: number, ready: () => void) => async (dispatch: Dispatch) => {
        dispatch({
            type: Type.GET_HERO_REQUEST,
        });

        try {
            const response = await fetchCharacterById(heroId);
            const res = await response.json();
            dispatch({
                type: Type.GET_HERO_SUCCESS,
                payload: (res.data.results as Character[])[0]
            })
            ready();
        } catch (err) {
            dispatch({
                type: Type.GET_HERO_FAILED,
                payload: err
            });
        }
    }

    /**
     * Async: Request hero comics
     */
    export const getHeroComics = (heroId: number) => async (dispatch: Dispatch) => {
        dispatch({
            type: Type.GET_HERO_COMICS_REQUEST,
        });

        try {
            const response = await fetchComicsByCharacter(heroId);
            const res = await response.json();
            dispatch({
                type: Type.GET_HERO_COMICS_SUCCESS,
                payload: res.data.results as Comic[]
            });
        } catch (err) {
            dispatch({
                type: Type.GET_HERO_COMICS_FAILED,
                payload: err
            })
        }
    }

    // export const setHeroSearchName = createAction(Type.SET_HERO_SEARCH_NAME);
}

export type CharacterActions = Omit<typeof CharacterActions, 'Type'>;
export const useCharacterActions = (dispatch: Dispatch) => {
    const {...actions} = CharacterActions;
    return useMemo(() => bindActionCreators(actions as any, dispatch), [dispatch]) as CharacterActions;
};
