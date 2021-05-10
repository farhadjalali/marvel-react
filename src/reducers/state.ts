import {HeroesModel, HeroModel} from '../types';

export interface RootState {
    characters: RootState.CharactersState;
}

export namespace RootState {
    export type CharactersState = {
        heroes: HeroesModel,
        hero: HeroModel
    };
}
