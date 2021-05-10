import {combineReducers} from 'redux'
import charactersReducer from "./characters";
import {RootState} from "./state";

const rootReducer = combineReducers<RootState>({
    marvel: charactersReducer,
})

export default rootReducer
