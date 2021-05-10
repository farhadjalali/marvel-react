import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import SuperheroCard from './SuperheroCard/SuperheroCard';
import {RootState} from "../../reducers/state";
import {useCharacterActions} from "../../actions";
import "./Home.scss"
import {Spinner} from "../_utils/Spinner";

const KEY_ENTER = "Enter";

export default function Home(): JSX.Element {
    const heroes = useSelector((state: RootState) => state.characters.heroes)
    const dispatch = useDispatch();
    const characterActions = useCharacterActions(dispatch);

    useEffect(() => {
        // Load heroes async from API
        dispatch(characterActions.getHeroes);
    }, []);

    function searchHeroesByName(ev: { code: string; }) {
        if (ev.code == KEY_ENTER)
            dispatch(characterActions.getHeroesByNameStart);
    }

    return heroes.loading ?
        <div className="home-page spinner-container w-100 d-flex align-items-center justify-content-center flex-grow-1">
            <Spinner/>
        </div>
        :
        <div className="home-page p-5">
            <input className="search-input w-100 border-0 border-bottom mb-3 p-2"
                   placeholder={'Search character'}
                   onKeyPress={searchHeroesByName}
            />

            {/* Cards wrapper */}
            <div className="row justify-content-center">
                {
                    heroes.items.map(hero => <SuperheroCard character={hero} key={hero.id}/>)
                }
            </div>

            <button className="btn-load-more bg-danger border-0 py-3 px-5 font-weight-bold text-uppercase text-white"
                    onClick={() => dispatch(characterActions.getMoreHeroes)}>Load More
            </button>
        </div>
}
