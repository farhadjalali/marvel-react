import moment from "moment";
import CryptoJS from "crypto-js";
import {config} from "../config";

export function getAuthorizationParams(): string {
    const timeStamp = moment().unix();
    const hash = CryptoJS.MD5(timeStamp + config.privateKey + config.publicKey)
        .toString(CryptoJS.enc.Hex);

    return `?apikey=${config.publicKey}&ts=${timeStamp}&hash=${hash}`;
}
