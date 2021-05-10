import {RootState} from "./state";
import {Store, applyMiddleware, createStore} from "redux";
import {logger, thunk} from "../middleware";
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from "../reducers";

export function configureStore(initialState?: RootState): Store<RootState> {
    let middleware = applyMiddleware(thunk, logger);

    if (process.env.NODE_ENV !== 'production') {
        middleware = composeWithDevTools(middleware);
    }

    const store = createStore(rootReducer, initialState, middleware) as Store<RootState>;

    return store;
}
