import {config} from '../config';
import urljoin from 'url-join';
import {GetCharactersOptions} from "../types";
import {getAuthorizationParams} from "./marvelApi-utility";

const CHARACTERS_API_PREFIX = `characters`;
const CHARACTERS_COMICS_API_PREFIX = `comics`;
const CHARACTERS_LOAD_LIMIT = 20

/**
 * GET /v1/public/characters. fetches lists of comic characters with optional filters
 * */
export function fetchCharactersList(options: GetCharactersOptions = {}): Promise<Response> {
    options = {offset: 0, limit: CHARACTERS_LOAD_LIMIT, ...options}

    // options.page === 1 ? 0 : (options.count * (options.page - 1));

    let params = getAuthorizationParams() + `&offset=${options.offset}&limit=${options.limit}`;

    if (options.search)
        params = params.concat(`&nameStartsWith=${options.search}`);

    const url = urljoin(config.baseUrl, CHARACTERS_API_PREFIX, params);
    return fetch(url);
}


/**
 * GET /v1/public/characters/{characterId}. fetches a single character resource
 * */
export function fetchCharacterById(characterId: number): Promise<Response> {
    const params = getAuthorizationParams();
    const url = urljoin(config.baseUrl, CHARACTERS_API_PREFIX, String(characterId), params);
    return fetch(url);
}


/**
 * GET /v1/public/characters/{characterId}/comics. Fetches lists of comics containing a specific character
 * */
export function fetchComicsByCharacter(characterId: number): Promise<Response> {
    const params = getAuthorizationParams();
    const url = urljoin(config.baseUrl, CHARACTERS_API_PREFIX, String(characterId), CHARACTERS_COMICS_API_PREFIX, params);
    return fetch(url);
}
