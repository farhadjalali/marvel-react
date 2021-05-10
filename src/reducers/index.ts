import {combineReducers} from 'redux'
import charactersReducer from "./marvel";
import {RootState} from "../store/state";

const rootReducer = combineReducers<RootState>({
    marvel: charactersReducer,
})

export default rootReducer
