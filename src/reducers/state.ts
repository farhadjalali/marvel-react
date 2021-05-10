import {HeroesModel, HeroModel} from '../types';

export interface RootState {
    marvel: RootState.CharactersState;
}

export namespace RootState {
    export type CharactersState = {
        heroes: HeroesModel,
        hero: HeroModel
    };
}
