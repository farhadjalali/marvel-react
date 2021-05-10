import {useMemo} from "react";
import {Dispatch, bindActionCreators} from "redux";
import {GetCharactersOptions} from "../types/global";

export namespace CharacterActions {
    export enum Type {
        GET_HEROES_REQUEST = 'GET_HEROES_REQUEST',

        GET_HERO_REQUEST = 'GET_HERO_REQUEST',

        GET_HERO_COMICS_REQUEST = 'GET_HERO_COMICS_REQUEST',
    }

    export const getHeroes = (options: GetCharactersOptions) => {
        return function (dispatch: Dispatch) {
            dispatch({
                type: Type.GET_HEROES_REQUEST,
            });
        }
    }

    export const getHeroById = () => {
        return function (dispatch: Dispatch) {
            dispatch({
                type: Type.GET_HERO_REQUEST,
            });
        }
    }

    export const getHeroComics = () => {
        return function (dispatch: Dispatch) {
            dispatch({
                type: Type.GET_HERO_COMICS_REQUEST,
            });
        }
    }
}

export type CharacterActions = Omit<typeof CharacterActions, 'Type'>;
export const useCharacterActions = (dispatch: Dispatch) => {
    const {Type, ...actions} = CharacterActions;
    return useMemo(() => bindActionCreators(actions as any, dispatch), [dispatch]) as CharacterActions;
};
