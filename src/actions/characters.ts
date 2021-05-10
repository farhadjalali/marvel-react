import {createAction} from 'redux-actions';
import {useMemo} from "react";
import {Dispatch, bindActionCreators} from "redux";
import {fetchCharacterById, fetchCharactersList, fetchComicsByCharacter} from "../apis";
import {Character, Comic, GetCharactersOptions} from "../types/global";
import {RootState} from "../reducers/state";

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
    }

    // export const getCharacters = createAction(Type.GET_CHARACTERS);
    export const getHeroes = (options: GetCharactersOptions) => {
        return function (dispatch: Dispatch) {
            dispatch({
                type: Type.GET_HEROES_REQUEST,
            });

            fetchCharactersList(options)
                .then(res => res.json())
                .then(res => dispatch({
                        type: Type.GET_HEROES_SUCCESS,
                        payload: res.data.results as Character[]
                    })
                )
                .catch(err => dispatch({
                    type: Type.GET_HEROES_FAILED,
                    payload: err
                }))
        }
    }

    export const getMoreHeroes = (dispatch: Dispatch, getState: () => RootState) => {
        const state = getState();
        // Todo: fix this
        return getHeroes({offset: state.characters.heroes.items.length});
    }

    export const getHeroesByNameStart = (dispatch: Dispatch, getState: () => RootState) => {
        console.log("Search")
        const state = getState();
        // Todo: fix this
        return getHeroes({search: "ma"});
    }

    export const getHeroById = () => {
        return function (dispatch: Dispatch) {
            dispatch({
                type: Type.GET_HERO_REQUEST,
            });

            // Todo: fix this
            const id = 1011334
            fetchCharacterById(id)
                .then(res => res.json())
                .then(res => dispatch({
                        type: Type.GET_HERO_SUCCESS,
                        payload: (res.data.results as Character[])[0]
                    })
                )
                .catch(err => dispatch({
                    type: Type.GET_HERO_FAILED,
                    payload: err
                }))
        }
    }

    export const getHeroComics = () => {
        return function (dispatch: Dispatch) {
            dispatch({
                type: Type.GET_HERO_COMICS_REQUEST,
            });

            const id = 1011334
            fetchComicsByCharacter(id)
                .then(res => res.json())
                .then(res => dispatch({
                        type: Type.GET_HERO_COMICS_SUCCESS,
                        payload: res.data.results as Comic[]
                    })
                )
                .catch(err => dispatch({
                    type: Type.GET_HERO_COMICS_FAILED,
                    payload: err
                }))
        }
    }
}

export type CharacterActions = Omit<typeof CharacterActions, 'Type'>;
export const useCharacterActions = (dispatch: Dispatch) => {
    const {Type, ...actions} = CharacterActions;
    return useMemo(() => bindActionCreators(actions as any, dispatch), [dispatch]) as CharacterActions;
};
