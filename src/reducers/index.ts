import {combineReducers} from 'redux'
import charactersReducer from "./characters";
import {RootState} from "./state";

const rootReducer = combineReducers<RootState>({
    characters: charactersReducer,
})

export default rootReducer