import {Character, Comic} from "./global";

export interface HeroModel {
    current?: Character;
    loading: boolean;

    comics: Comic[];
    comicsLoading: boolean;
}
