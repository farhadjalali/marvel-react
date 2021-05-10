import moment from 'moment';
import CryptoJS from 'crypto-js';
import {config} from '../config';
import urljoin from 'url-join';
import {GetCharactersOptions} from "../types";

const CHARACTERS_API_PREFIX = `characters`;
const CHARACTERS_COMICS_API_PREFIX = `comics`;
const CHARACTERS_LOAD_LIMIT = 20

export function fetchCharactersList(options: GetCharactersOptions = {}): Promise<Response> {
    options = {offset: 0, limit: CHARACTERS_LOAD_LIMIT, ...options}

    let params = getAuthorizationParams() + `&offset=${options.offset}&limit=${options.limit}`;

    if (options.search)
        params = params.concat(`&nameStartsWith=${options.search}`);

    const url = urljoin(config.baseUrl, CHARACTERS_API_PREFIX, params);
    return fetch(url);
}

export function fetchCharacterById(characterId: number): Promise<Response> {
    const params = getAuthorizationParams();
    const url = urljoin(config.baseUrl, CHARACTERS_API_PREFIX, String(characterId), params);
    return fetch(url);
}

export function fetchComicsByCharacter(characterId: number): Promise<Response> {
    const params = getAuthorizationParams();
    const url = urljoin(config.baseUrl, CHARACTERS_API_PREFIX, String(characterId), CHARACTERS_COMICS_API_PREFIX, params);
    return fetch(url);
}

function getAuthorizationParams(): string {
    const timeStamp = moment().unix();
    const hash = CryptoJS.MD5(timeStamp + config.privateKey + config.publicKey)
        .toString(CryptoJS.enc.Hex);

    return `?apikey=${config.publicKey}&ts=${timeStamp}&hash=${hash}`;
}
