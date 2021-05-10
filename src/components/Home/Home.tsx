import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import SuperheroCard from './SuperheroCard/SuperheroCard';
import {RootState} from "../../reducers/state";
import {CharacterActions} from "../../actions";
import "./Home.scss"
import {Spinner} from "../_utils/Spinner";

const KEY_ENTER = "Enter";

export default function Home(): JSX.Element {
    const heroes = useSelector((state: RootState) => state.marvel.heroes);
    const dispatch = useDispatch();
    const [searchName, setSearchName] = useState("");

    useEffect(() => {
        // Load heroes async from API
        dispatch(CharacterActions.getHeroes({}));
    }, []);

    function searchInputEnterPressed(ev: any) {
        if (ev.code == KEY_ENTER) {
            dispatch(CharacterActions.getHeroesByNameStart(searchName));
        }
    }

    return heroes.loading && heroes.items.length === 0 ?
        <div className="home-page spinner-container w-100 d-flex align-items-center justify-content-center flex-grow-1">
            {/* Loading Spinner */}
            <Spinner/>
        </div>
        :
        <div className="home-page p-5">
            {/* Search input */}
            <div className="search-input-icon"/>
            <input className="search-input w-100 border-0 outline-0 border-bottom mb-3 pl-5 p-2"
                   placeholder={'Search character'}
                   onChange={ev => setSearchName(ev.target.value)}
                   onKeyPress={searchInputEnterPressed}
            />

            {/* Cards wrapper */}
            <div className="d-flex flex-wrap justify-content-start">
                {
                    heroes.items.map(hero => <SuperheroCard character={hero} key={hero.id}/>)
                }
            </div>

            {/* Load More */}
            {heroes.hasMore ?
                <div className="d-flex justify-content-center p-5">
                    <button className="btn-load-more position-relative border-0 py-3 px-5 font-weight-bold text-uppercase text-white"
                            onClick={() => dispatch(CharacterActions.getMoreHeroes())}>Load More
                    </button>
                </div> : ''
            }
        </div>
}
