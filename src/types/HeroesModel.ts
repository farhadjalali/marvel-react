import {Character} from "./global";

export interface HeroesModel {
    items: Character[];
    loading: boolean;
    hasMore: boolean;
    searchName: string;
    count: number;
    offset: number;
}
